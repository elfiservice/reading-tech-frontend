import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

import Home from '../components/Home'
import NewPost from '../components/NewPost'
import Category from '../components/Category'
import PostPage from '../components/PostPage'
import PostEdit from '../components/PostEdit'
import Page404 from '../components/Page404'

const Routes = (props) => {
    return (
        <Fragment>
            <Route path='/' exact component={Home} />
            <Route path='/new-post' exact component={NewPost} />
            <Route path='/category/:cat_name' exact component={Category} />
            <Route path='/post/:id' exact component={PostPage} />
            <Route path='/edit-post/:id' exact component={PostEdit} />
            <Route path='/404-page-not-found' exact component={Page404} />
        </Fragment>
    )
}

export default Routes