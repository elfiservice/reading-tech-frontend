import ApiAxios from '../util/apiconfig'
import { idObjToKeyInArray } from '../util/helpers'

import { addCommentCount } from './posts'

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const ADD_COMMENTS = 'ADD_COMMENTS'
export const REMOVE_COMMENTS = 'REMOVE_COMMENTS'
export const VOTE_UPDATE_COMMENT = 'VOTE_UPDATE_COMMENT'
export const DELETE_PARENT_POST = 'DELETE_PARENT_POST'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'

export function handleReceiveComments(postId) {
    return (dispatch) => {
        return ApiAxios.get(`/posts/${postId}/comments`)
             .then(({ data }) => {
                const comments = idObjToKeyInArray(data)
                dispatch(receiveComments(comments))
             });
     }
}

export function handleAddComment(comment) {
    return (dispatch) => {
        dispatch(addComment(comment))
        dispatch(addCommentCount(comment.parentId))
        return ApiAxios.post(`/comments`, comment)
             .catch((err) => {
                dispatch(removeComment(comment.id))
                alert('We found a error while try to save your comment, please try again.')
             });
     }
}

export function handlerVoteUpdate(commentId, option) {
    return dispatch => {
        dispatch(voteUpdateComment(commentId, option))
        return ApiAxios.post(`/comments/${commentId}`, { option })
            .catch((err) => {
                const optionToggled = option === 'upVote' ? 'downVote' : 'upVote'
                dispatch(voteUpdateComment(commentId, optionToggled))
                alert('We found a error while try to save your Vote, please try again.')
            });
    }
}

export function deleteParentPostComments(postId) {
    return {
        type: DELETE_PARENT_POST,
        postId
    }
}

export function handlerUpdateComment(comment) {
    return dispatch => {
        dispatch(updateComment(comment))
        const body = comment.body;
        const timestamp = comment.timestamp;
        return ApiAxios.put(`/comments/${comment.id}`, { body, timestamp })
            .catch((err) => {
                alert('We found a error while try to save your Comment, please try again.')
            });
    }
}

export function handleRemoveComment(commentId) {
    return (dispatch) => {
        dispatch(removeComment(commentId))
        return ApiAxios.delete(`/comments/${commentId}`)
             .catch((err) => {
                alert('We found a error while try to Delete your comment, please try again.')
             });
     }
}

function voteUpdateComment(commentId, option) {
    return {
        type: VOTE_UPDATE_COMMENT,
        commentId,
        option
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

function updateComment(comment) {
    return {
        type: UPDATE_COMMENT,
        comment
    }
}




