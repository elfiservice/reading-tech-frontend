import React from 'react'
import { connect } from 'react-redux'
import './Post.css'

import { formatDate } from '../util/helpers'

const Post = (props) => {
    const { title, author, body, commentCount, timestamp, voteScore } = props.post   
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
                <div className="comments-container">
                    {/* toDo: commentList compt */}
                </div>
            </div>

        </article>
    )
}

function mapStateToProps({ posts }, { id }) {
    const post = posts[id]

    return {
        post
    }
}

export default connect(mapStateToProps)(Post)