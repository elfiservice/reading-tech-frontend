import React, { Component } from 'react'
import { connect } from 'react-redux'

import { handleReceiveComments } from '../actions/comments'

import CommentList from './CommentList'
import AddComment from './AddComment'

class Comments extends Component {
    componentDidMount() {
        this.props.dispatch(handleReceiveComments(this.props.postId))
    }

    checkOriginPost() {
        if(this.props.comments.length <= 0) {
            this.componentDidMount()
            return <div className="container">Loading...</div>
        } 
    }

    render() {
        this.checkOriginPost()
        const { postId, comments } = this.props
        return (
            <div className="comments-container">
                <AddComment postId={postId} />
                <CommentList comments={comments} />
            </div>
        )
    }

}

function mapStateToProps({ comments }, { postId }) {
    if(comments) {
        return {
            comments: Object.values(comments)
                .filter( comment => comment.parentId === postId )
        }
    }
    return false
}

export default connect(mapStateToProps)(Comments)