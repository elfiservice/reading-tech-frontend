import ApiAxios from '../util/apiconfig'
import { idObjToKeyInArray } from '../util/helpers'

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'

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

export function receiveComments(comments) {
    return {
        type: RECEIVE_COMMENTS,
        comments
    }
}

