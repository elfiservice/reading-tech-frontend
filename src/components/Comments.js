import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { 
        handleReceiveComments,
        handleAddComment, 
        handlerVoteUpdate, 
        handlerUpdateComment 
    } from '../actions/comments'

import { handleRemoveComment } from '../actions/share'    

import CommentList from './CommentList'
import AddComment from './AddComment'

class Comments extends Component {
    constructor(props) {
        super(props);
        this.addComment = this.addComment.bind(this);
    }
    componentDidMount() {
        this.props.actions.handleReceiveComments(this.props.postId)
    }

    addComment(commentToDB) {
        this.props.actions.handleAddComment(commentToDB)
    }

    render() {
        const { postId, comments } = this.props
        return (
            <div className="comments-container">
                <AddComment postId={postId} addComment={this.addComment} />
                <CommentList comments={comments} actions={this.props.actions} />
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

function mapDispatchToProps(dispatch) {
    const actions = bindActionCreators({ 
        handleReceiveComments,
        handleAddComment, 
        handlerVoteUpdate, 
        handlerUpdateComment,
        handleRemoveComment
     }, dispatch);
    return { actions }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)