import ApiAxios from '../util/apiconfig'

import { receiveCategories } from './categories'
// import { receiveComments } from './comments'
import { receivePosts } from './posts'

function getCategories() {
    return ApiAxios.get('/categories')
}

function getPosts() {
    return ApiAxios.get('/posts')
}

export function handleInitialData() {
    return (dispatch) => {
        return ApiAxios.all([getCategories(), getPosts()])
            .then(ApiAxios.spread(function (categories, posts) {
                // Both requests are now complete
                console.log(categories)
                console.log(posts)
                // dispatch(receiveCategories(categories))
                // dispatch(receivePosts(posts))
            }));
    }
} 