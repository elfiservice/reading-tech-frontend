import React, { Component } from 'react'
import { connect } from 'react-redux'

import { handleReceiveComments, handleAddComment } from '../actions/comments'


import CommentList from './CommentList'
import AddComment from './AddComment'

class Comments extends Component {
    constructor(props) {
        super(props);
        this.addComment = this.addComment.bind(this);
    }
    componentDidMount() {
        this.props.dispatch(handleReceiveComments(this.props.postId))
    }

    addComment(commentToDB) {
        this.props.dispatch(handleAddComment(commentToDB))
    }

    render() {
        const { postId, comments } = this.props
        return (
            <div className="comments-container">
                <AddComment postId={postId} addComment={this.addComment} />
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