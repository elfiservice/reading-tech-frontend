import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import Home from '../components/Home'
import NewPost from '../containers/NewPost'
import Category from '../components/Category'
import PostPage from '../containers/PostPage'
import PostEdit from '../containers/PostEdit'
import Page404 from '../containers/Page404'

const Routes = (props) => {
    return (
        <Switch>
            <Route exact path='/404' component={Page404} />
            <Route exact path='/' component={Home} />
            <Route path='/new-post' exact component={NewPost} />
            <Route exact path='/:cat_name' component={Category} />
            <Route exact path='/:category/:post_id' component={PostPage} />
            <Route exact path='/:category/:post_id/edit' component={PostEdit} />
            <Redirect from="*" to="/" />
        </Switch>
    )
}

export default Routes