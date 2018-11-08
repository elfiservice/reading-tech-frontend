import { 
    RECEIVE_POSTS, 
    ADD_COMMENT_COUNT, 
    VOTE_UPDATE_POST,
    ADD_NEW_POST
} from '../actions/posts'

export default function posts (state = {}, action) {
    switch(action.type) {
        case RECEIVE_POSTS :
            return {
                ...state,
                ...action.posts
            }
        case ADD_COMMENT_COUNT :
            return {
                ...state,
                [action.postId]: {
                    ...state[action.postId],
                    commentCount: state[action.postId].commentCount + 1
                }
            }
        case VOTE_UPDATE_POST :
            return {
                ...state,
                [action.postId]: {
                    ...state[action.postId],
                    voteScore: action.option === 'upVote' 
                        ? state[action.postId].voteScore + 1 
                        : state[action.postId].voteScore - 1
                }
            }
        case ADD_NEW_POST :
            return {
                ...state,
                [action.post.id]: action.post
            }
        default:
            return state
    }
}