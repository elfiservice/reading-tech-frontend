import { 
    RECEIVE_COMMENTS,
    ADD_COMMENTS,
    VOTE_UPDATE_COMMENT,
    DELETE_PARENT_POST,
    UPDATE_COMMENT,
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
        case VOTE_UPDATE_COMMENT :
            return {
                ...state,
                [action.commentId]: {
                    ...state[action.commentId],
                    voteScore: action.option === 'upVote' 
                        ? state[action.commentId].voteScore + 1 
                        : state[action.commentId].voteScore - 1
                }
            }
        case DELETE_PARENT_POST :
            let newState = {}
            for (const key in state) {
                if(state[key].parentId === action.postId) {
                    newState[key] = {
                        ...state[key],
                        parentDeleted: true
                    }
                }
             }
            return newState
        case UPDATE_COMMENT :
            return {
                ...state,
                [action.comment.id]: {
                    ...state[action.comment.id],
                    body: action.comment.body,
                    timestamp: action.comment.timestamp 
                }
            }
        case REMOVE_COMMENTS :
            return {
                ...state,
                [action.commentId]: {
                    ...state[action.commentId],
                    deleted: true
                }
            }
        default:
            return state
    }
}