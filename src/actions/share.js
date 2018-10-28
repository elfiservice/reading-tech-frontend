import ApiAxios from '../util/apiconfig'

import { receiveCategories } from './categories'
// import { receiveComments } from './comments'
import { receivePosts } from './posts'

function getCategories() {
    return ApiAxios.get('/categories')
}

export function getPosts() {
    return ApiAxios.get('/posts')
}

export function handleInitialData() {
    return (dispatch) => {
        Promise.all([getCategories(), getPosts()])
            .then(([catData, postsData]) => {
                const categories = catData.data.categories
                const posts = postsData.data
                dispatch(receiveCategories(categories))
                dispatch(receivePosts(posts))
            });
    }
} 