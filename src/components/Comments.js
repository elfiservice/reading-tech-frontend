import React, { Component } from 'react'
import { connect } from 'react-redux'

import { handleReceiveComments } from '../actions/comments'

import CommentList from './CommentList'
import AddComment from './AddComment'

class Comments extends Component {
    componentDidMount() {
        this.props.dispatch(handleReceiveComments(this.props.postId))
    }

    render() {
        return (
            <div className="comments-container">
                <AddComment postId={this.props.postId} />
                <CommentList comments={this.props.comments} />
            </div>
        )
    }

}

function mapStateToProps({ comments }, { postId }) {

    return {
        comments: Object.values(comments)
            .filter( comment => comment.parentId === postId )
    }
}

export default connect(mapStateToProps)(Comments)