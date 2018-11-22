import ApiAxios from '../util/apiconfig'

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES'
export const ADD_CATEGORY = 'ADD_CATEGORY'
export const DELETE_CATEGORY = 'DELETE_CATEGORY'
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY'

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

export function handlerDeleteCategory(category) {
    return (dispatch) => {
            dispatch(deleteCategory(category))
        return ApiAxios.delete(`/categories/${category.path}`)
                .catch( err => {
                    console.log('Error Categories Actions: ', err);
                    alert('We found a error while try to delete the Category, please try again.')
                })
    }
}

export function updateCategory(newCategory, currentlyCategory) {
    return {
        type: UPDATE_CATEGORY,
        newCategory,
        currentlyCategory
    }
}

function addCategory(category) {
    return {
        type: ADD_CATEGORY,
        category
    }
}

function deleteCategory(category) {
    return {
        type: DELETE_CATEGORY,
        category
    }
}
