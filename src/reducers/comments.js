import { 
    RECEIVE_COMMENTS,
    ADD_COMMENTS,
    REMOVE_COMMENTS
} from '../actions/comments'

export default function comments (state = {}, action) {
    switch(action.type) {
        case RECEIVE_COMMENTS :
            return {
                ...state,
                ...action.comments
            }
        case ADD_COMMENTS :
            return {
                ...state,
                [action.comment.id]: action.comment
            }
        default:
            return state
    }
}