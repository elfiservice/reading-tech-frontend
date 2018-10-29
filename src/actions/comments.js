import ApiAxios from '../util/apiconfig'
import { idObjToKeyInArray } from '../util/helpers'

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const ADD_COMMENTS = 'ADD_COMMENTS'
export const REMOVE_COMMENTS = 'REMOVE_COMMENTS'

export function handleReceiveComments(postId) {
    return (dispatch) => {
        return ApiAxios.get(`/posts/${postId}/comments`)
             .then(({ data }) => {
                const comments = idObjToKeyInArray(data)
                console.log(comments);
                dispatch(receiveComments(comments))
             });
     }
}

export function handleAddComment(comment) {
    return (dispatch) => {
        dispatch(addComment(comment))
        return ApiAxios.post(`/comments`, comment)
             .catch((err) => {
                dispatch(removeComment(comment.id))
                alert('We found a error while try to save your comment, please try again.')
             });
     }
}

function receiveComments(comments) {
    return {
        type: RECEIVE_COMMENTS,
        comments
    }
}

function addComment(comment) {
    return {
        type: ADD_COMMENTS,
        comment
    }
}

function removeComment(commentId) {
    return {
        type: REMOVE_COMMENTS,
        commentId
    }
}


