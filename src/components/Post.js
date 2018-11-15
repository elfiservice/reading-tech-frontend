import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Post.css'

import { formatDate } from '../util/helpers'
import Comments from '../containers/Comments'
import VoteScore from './VoteScore'

class Post extends Component {
    scoreUpdateClick = (option) => {
        this.props.actions.handlerVoteUpdate(this.props.post.id, option)
    }

    render() {
        const { id, title, author, body, category, commentCount, timestamp, voteScore } = this.props.post
        return (
            <article className="post">
                <header className="inverse-color content">
                    <h3><Link to={`/${category}/${id}`}>{title}</Link></h3>
                    <div className="author">
                        by {author} 
                        <span className="date"><i className="fa fa-calendar" aria-hidden="true"></i>{formatDate(timestamp)}</span>
                        <span className="category">
                            <i><b>{category}</b></i> category
                        </span>
                    </div>
                </header>
                <div className="body content">
                    {body}
                </div>
                <div className="interactions inverse-color content">
                    <div className="votes">
                        <VoteScore 
                            voteScore={voteScore}
                            scoreUpdate={this.scoreUpdateClick}
                        />
                    </div>
                    <div className="comments-count">
                        <div>{commentCount} comments</div>
                    </div>
                </div>
                <Comments postId={id} />
            </article>
        )
    }
}

export default Post