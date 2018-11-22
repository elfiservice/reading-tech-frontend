import { 
    RECEIVE_CATEGORIES, 
    ADD_CATEGORY, 
    DELETE_CATEGORY, 
    UPDATE_CATEGORY 
} from '../actions/categories'

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
        case DELETE_CATEGORY :
            const categoriesArray = Object.values(state);
            const categoriesAfterRemovedItem = categoriesArray.filter( cat => cat.path !== action.category.path )
            return {
                ...categoriesAfterRemovedItem
            }
        case UPDATE_CATEGORY :
            let index = null
            for (let prop in state) {
                if(state[prop].path === action.currentlyCategory.path) {
                    index = prop
                }
            }
            return {
                ...state,
                [index]: {
                    name: action.newCategory.name,
                    path: action.newCategory.path
                }
            }
        default:
            return state
    }
}