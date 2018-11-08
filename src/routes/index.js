import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

import Home from '../components/Home'
import NewPost from '../components/NewPost'
import Category from '../components/Category'
import PostPage from '../components/PostPage'

const Routes = (props) => {
    return (
        <Fragment>
            <Route path='/' exact component={Home} />
            <Route path='/new-post' exact component={NewPost} />
            <Route path='/category/:cat_name' exact component={Category} />
            <Route path='/post/:id' exact component={PostPage} />
        </Fragment>
    )
}

export default Routes