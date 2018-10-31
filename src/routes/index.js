import React from 'react'
import { Route } from 'react-router-dom'

import Home from '../components/Home'
import NewPost from '../components/NewPost'

const Routes = (props) => {
    return (
        <div>
            <Route path='/' exact component={Home} />
            <Route path='/new-post' exact component={NewPost} />
        </div>
    )
}

export default Routes