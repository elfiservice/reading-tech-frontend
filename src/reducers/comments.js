import { 
    RECEIVE_COMMENTS,
    ADD_COMMENTS,
    VOTE_UPDATE_COMMENT,
    DELETE_PARENT_POST
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
        default:
            return state
    }
}