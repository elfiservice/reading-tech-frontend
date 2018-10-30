import React from 'react'
import './VoteScore.css'

const VoteScore = (props) => {
    return (
        <div className="vote">
            <div className="score">
                {props.voteScore}
            </div>
            <div className="up" onClick={() => props.scoreUpdate('upVote')}><i className="fa fa-thumbs-o-up" aria-hidden="true"></i></div>
            <div className="down" onClick={() => props.scoreUpdate('downVote')}><i className="fa fa-thumbs-o-down" aria-hidden="true"></i></div>
        </div>
    )
}

export default VoteScore