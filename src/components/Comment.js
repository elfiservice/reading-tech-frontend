import React from 'react'
import { connect } from 'react-redux'
import './Comment.css'

import { handlerVoteUpdate } from '../actions/comments'

import { formatDate } from '../util/helpers'
import VoteScore from './VoteScore'

const Comment = (props) => {
    const { id, author, body, timestamp, voteScore } = props.comment
    const scoreUpdateClick = (option) => {
        props.dispatch(handlerVoteUpdate(id, option))       
    }

    return (
        <div className="comment"> 
            <div className="apresetation">
                Commented by <span className="author">{author}</span> in <span>{formatDate(timestamp)}</span>
            </div>
            <div className="body">
                {body}
            </div>
            <VoteScore 
                voteScore={voteScore}
                scoreUpdate={scoreUpdateClick}
            />
        </div>
    )
}

export default connect()(Comment)