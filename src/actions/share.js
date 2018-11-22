import ApiAxios from '../util/apiconfig'

import { receiveCategories, updateCategory } from './categories'
import { deleteParentPostComments, removeComment } from './comments'
import { receivePosts, deletePost, decCommentCount, updatingCategoryPost } from './posts'

function getCategories() {
    return ApiAxios.get('/categories')
}

export function getPosts() {
    return ApiAxios.get('/posts')
}

export function handleInitialData() {
    return (dispatch) => {
       return Promise.all([getCategories(), getPosts()])
            .then(([catData, postsData]) => {
                const categories = catData.data.categories
                const posts = postsData.data
                dispatch(receiveCategories(categories))
                dispatch(receivePosts(idObjToKeyInArray(posts)))
            });
    }
}

export function handlerDeletePost(postId) {
    return dispatch => {
        return ApiAxios.delete(`/posts/${postId}`)
            .then(res => {
                dispatch(deletePost(postId))
                dispatch(deleteParentPostComments(postId))
            })
            .catch((err) => {
                console.log('Error Delete Post Actions: ', err);
                alert('We found a error while try to Delete your Post, please try again.')
            });
    }
}

export function handleRemoveComment(comment) {
    return (dispatch) => {
        dispatch(removeComment(comment.id))
        dispatch(decCommentCount(comment.parentId))
        return ApiAxios.delete(`/comments/${comment.id}`)
             .catch((err) => {
                alert('We found a error while try to Delete your comment, please try again.')
             });
     }
}

export function handlerUpdateCategory(newCategory, currentlyCategory) {
    return (dispatch) => {
            dispatch(updateCategory(newCategory, currentlyCategory))
        return ApiAxios.put(`/categories/${currentlyCategory.path}`, newCategory)
                .then( () => {
                    dispatch(updatingCategoryPost(newCategory, currentlyCategory))
                })
                .catch( err => {
                    console.log('Error Categories Actions: ', err);
                    alert('We found a error while try to update the Category, please try again.')
                })
    }
}


function idObjToKeyInArray(array) {
    let newArray = []
    for (let index = 0; index < array.length; index++) {
        const id = array[index].id;
        newArray[id] = array[index]
    }
    return newArray; 
}