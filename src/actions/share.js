import ApiAxios from '../util/apiconfig'

import { receiveCategories } from './categories'
import { deleteParentPostComments } from './comments'
import { receivePosts, deletePost } from './posts'

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


function idObjToKeyInArray(array) {
    let newArray = []
    for (let index = 0; index < array.length; index++) {
        const id = array[index].id;
        newArray[id] = array[index]
    }
    return newArray; 
}