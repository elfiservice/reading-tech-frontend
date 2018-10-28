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
        </div>
    )
}

export default Comment