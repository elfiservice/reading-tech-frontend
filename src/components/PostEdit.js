import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import FormPost from './FormPost'

class PostEdit extends Component {
    render() {
        const postId = this.props.match.params.id
        let post = this.props.posts[postId]        
        if(!this.props.posts[postId]) {
            return <div className="container container-main">Loading...</div>
        } 

        return (
            <div className="newpost container container-main">
                <header>
                    <Link to="/">Back to Posts</Link>
                    <h2>Edit Post</h2>
                </header>
                <FormPost post={post} />
            </div>
        )
    }
}

function mapStateToProps({ posts }) {
    return {
        posts
    }
}

export default connect(mapStateToProps)(PostEdit)
