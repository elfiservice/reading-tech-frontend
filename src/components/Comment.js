import React from 'react'
import './Comment.css'

import { formatDate } from '../util/helpers'

const Comment = (props) => {
    const { author, body, timestamp, voteScore } = props.comment
    return (
        <div className="comment"> 
            <div className="apresetation">
                Commented by <span className="author">{author}</span> in <span>{formatDate(timestamp)}</span>
            </div>
            <div className="body">
                {body}
            </div>
            <div className="vote">
                <div className="score">
                    {voteScore}
                </div>
                <div className="up"><i className="fa fa-thumbs-o-up" aria-hidden="true"></i></div>
                <div className="down"><i className="fa fa-thumbs-o-down" aria-hidden="true"></i></div>
            </div>
        </div>
    )
}

export default Comment