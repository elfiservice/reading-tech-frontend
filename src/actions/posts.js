export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const ADD_COMMENT_COUNT = 'ADD_COMMENT_COUNT'

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