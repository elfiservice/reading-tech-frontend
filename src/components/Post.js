import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import './Post.css'

import { handlerVoteUpdate } from '../actions/posts'

import { formatDate } from '../util/helpers'
import Comments from './Comments'
import VoteScore from './VoteScore'

class Post extends Component {
    scoreUpdateClick = (option) => {
        this.props.dispatch(handlerVoteUpdate(this.props.id, option))
    }

    render() {
        if(!this.props.posts) {
            return <div className="container">Loading...</div>
        }

        if(!this.props.post) {
            return <Redirect to="/404-page-not-found" />
        }

        const { id, title, author, body, category, commentCount, timestamp, voteScore } = this.props.post
        return (
            <article className="post">
                <header className="inverse-color content">
                    <h3><Link to={`/post/${id}`}>{title}</Link></h3>
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

function mapStateToProps({ posts }, { id }) {
    const post = posts[id]
    if(_.isEmpty(posts)) {
        posts = null
    }

    return {
        post,
        posts
    }
}

export default connect(mapStateToProps)(Post)