import ApiAxios from '../util/apiconfig'

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const ADD_COMMENT_COUNT = 'ADD_COMMENT_COUNT'
export const VOTE_UPDATE_POST = 'VOTE_UPDATE_POST'
export const ADD_NEW_POST = 'ADD_NEW_POST'
export const UPDATE_POST = 'UPDATE_POST'

export function receivePosts(posts) {
    return {
        type: RECEIVE_POSTS,
        posts
    }
}

export function addCommentCount(postId) {
    return {
        type: ADD_COMMENT_COUNT,
        postId
    }
}

export function handlerVoteUpdate(postId, option) { //criar 1 unico handlerVoteUpdate no share.js para posts e comments actions usarem
    return dispatch => {
        dispatch(voteUpdate(postId, option))
        return ApiAxios.post(`/posts/${postId}`, { option })
            .catch((err) => {
                const optionToggled = option === 'upVote' ? 'downVote' : 'upVote'
                dispatch(voteUpdate(postId, optionToggled))
                alert('We found a error while try to save your Vote, please try again.')
            });
    }
}

export function handlerAddNewPost(post) {
    return dispatch => {
        return ApiAxios.post(`/posts`, post)
            .then(res => dispatch(addNewPost(post)))
            .catch((err) => {
                console.log('Error Posts Actions: ', err);
                alert('We found a error while try to save your New Post, please try again.')
            });
    }
}

export function handlerUpdatePost(post) {
    return dispatch => {
        return ApiAxios.put(`/posts/${post.id}`, post)
            .then(res => dispatch(updatePost(post)))
            .catch((err) => {
                console.log('Error update Posts Actions: ', err);
                alert('We found a error while try to Update your Post, please try again.')
            });
    }
}

function voteUpdate(postId, option) {
    return {
        type: VOTE_UPDATE_POST,
        postId,
        option
    }
}

function addNewPost(post) {
    return {
        type: ADD_NEW_POST,
        post
    }
}

function updatePost(post) {
    return {
        type: UPDATE_POST,
        post
    }
}