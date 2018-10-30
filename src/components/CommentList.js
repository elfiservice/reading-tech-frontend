import React, { Component } from 'react'
import './CommentList.css'

import Comment from './Comment'

class CommentList extends Component {
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

export default CommentList