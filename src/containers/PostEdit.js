import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { bindActionCreators } from 'redux';

import FormPost from '../components/FormPost'
import { handlerUpdatePost } from '../actions/posts'

class PostEdit extends Component {
    render() {
        const postId = this.props.match.params.post_id
        let { posts, categories, actions } = this.props
        
        if(_.isEmpty(posts)) {
            posts = null
        } 

        if(!posts) {
            return <div className="container container-main">Loading...</div>
        } 

        if(!posts[postId]) {
            return <Redirect to="/404" />
        } 
        const post = posts[postId];
        return (
            <div className="newpost container container-main">
                <header>
                    <Link to="/">Back to Posts</Link>
                    <h2>Edit Post</h2>
                </header>
                <FormPost post={post} categories={categories} actions={actions} />
            </div>
        )
    }
}

function mapStateToProps({ posts, categories }) {
    return {
        posts,
        categories: Object.values(categories)
    }
}

function mapDispatchToProps(dispatch) {
    const actions = bindActionCreators({ handlerUpdatePost }, dispatch);
    return { actions };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostEdit)
