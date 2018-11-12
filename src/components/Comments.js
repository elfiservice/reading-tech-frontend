import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import { handleReceiveComments } from '../actions/comments'

import CommentList from './CommentList'
import AddComment from './AddComment'

class Comments extends Component {
    componentDidMount() {
        this.props.dispatch(handleReceiveComments(this.props.postId))
    }

    render() {
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
    return {
        comments: Object.values(comments)
            .filter( comment => comment.parentId === postId && comment.deleted === false )
    }
}

export default connect(mapStateToProps)(Comments)