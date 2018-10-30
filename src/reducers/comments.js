import { 
    RECEIVE_COMMENTS,
    ADD_COMMENTS,
    VOTE_UPDATE_COMMENT
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
        default:
            return state
    }
}