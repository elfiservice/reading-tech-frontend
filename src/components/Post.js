import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Post.css'

import { handleReceiveComments } from '../actions/comments'

import { formatDate } from '../util/helpers'
import CommentList from './CommentList'
import AddComment from './AddComment'

class Post extends Component {
    componentDidMount() {
        this.props.dispatch(handleReceiveComments(this.props.id))
    }
    render() {
        const { id, title, author, body, commentCount, timestamp, voteScore } = this.props.post
        return (
            <article className="post">
                <header className="inverse-color content">
                    <h3>{title}</h3>
                    <div className="author">
                        by {author} 
                        <span className="date"><i className="fa fa-calendar" aria-hidden="true"></i>{formatDate(timestamp)}</span>
                    </div> 
                </header>
                <div className="body content">
                    {body}
                </div>
                <div className="interactions inverse-color content">
                    <div className="votes">
                        {voteScore} Votes
                    </div>
                    <div className="comments-count">
                        <div>{commentCount} comments</div>
                    </div>
                </div>
                <div className="comments-container">
                    <AddComment postId={id} />
                    <CommentList comments={this.props.comments} />
                </div>

            </article>
        )
    }
}

function mapStateToProps({ posts, comments }, { id }) {
    const post = posts[id]

    return {
        post,
        comments: Object.values(comments)
            .filter( comment => comment.parentId === id )
    }
}

export default connect(mapStateToProps)(Post)