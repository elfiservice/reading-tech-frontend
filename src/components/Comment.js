import React from 'react'
import './Comment.css'

import { formatDate } from '../util/helpers'
import VoteScore from './VoteScore'

const Comment = (props) => {
    const { id, author, body, timestamp, voteScore } = props.comment
    const scoreUpdateClick = (option) => {
       if(option === 'upVote') {
            console.log('soma 1 para comment ' + id);
       } else if(option === 'downVote') {
           console.log('sub 1 para comment ' + id);
       }
        
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

export default Comment