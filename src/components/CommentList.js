import React, { Component } from 'react'
import { connect } from 'react-redux'
import './CommentList.css'

import { handleReceiveComments } from '../actions/comments'
import Comment from './Comment'

class CommentList extends Component {
    componentDidMount() {
        this.props.dispatch(handleReceiveComments(this.props.postId))
    }

    render() {
        return (
            <div className="comment-list"> 
                {this.props.comments.map( comment => (
                    <Comment key={comment.id} comment={comment} />
                ))}
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

export default connect(mapStateToProps)(CommentList)