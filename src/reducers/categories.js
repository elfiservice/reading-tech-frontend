import { RECEIVE_CATEGORIES, ADD_CATEGORY } from '../actions/categories'

export default function categories (state = {}, action) {
    switch(action.type) {
        case RECEIVE_CATEGORIES :
            return {
                ...state,
                ...action.categories
            }
        case ADD_CATEGORY :
            //SELECT NEXT INDEX
            const indexs = Object.keys(state);
            const nextIndex = indexs.length;
            return {
                ...state,
                [nextIndex]: {
                    name: action.category.name,
                    path: action.category.path
                }
            }
        default:
            return state
    }
}