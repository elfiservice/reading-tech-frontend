import ApiAxios from '../util/apiconfig'

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const ADD_CATEGORY = 'ADD_CATEGORY'

export function receiveCategories(categories) {
    return {
        type: RECEIVE_CATEGORIES,
        categories
    }
}

export function handlerAddCategory(category) {
    return (dispatch) => {
            dispatch(addCategory(category))
        return ApiAxios.post('/categories', category)
                .catch( err => {
                    console.log('Error Categories Actions: ', err);
                    alert('We found a error while try to save your New Category, please try again.')
                })
    }
}

function addCategory(category) {
    return {
        type: ADD_CATEGORY,
        category
    }
}