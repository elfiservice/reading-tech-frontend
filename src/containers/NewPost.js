import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import FormPost from '../components/FormPost'

import { handlerAddNewPost } from '../actions/posts'

class NewPost extends Component {
    render() {
        return (
            <div className="newpost container container-main">
                <header>
                    <Link to="/">Back to Posts</Link>
                    <h2>New Post</h2>
                </header>
                <FormPost categories={this.props.categories} actions={this.props.actions} />
            </div>
        )
    }
}

function mapStateToProps({ categories }) {
    return {
        categories: Object.values(categories)
    }
}

function mapDispatchToProps(dispatch) {
    const actions = bindActionCreators({ handlerAddNewPost }, dispatch);
    return { actions };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPost)
