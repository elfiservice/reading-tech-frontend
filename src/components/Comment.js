import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Comment.css'

import { handlerVoteUpdate } from '../actions/comments'

import { formatDate } from '../util/helpers'
import VoteScore from './VoteScore'

class Comment extends Component {
    constructor(props) {
        super(props)
        this.scoreUpdateClick = this.scoreUpdateClick.bind(this);
    }

    scoreUpdateClick(option) {
        const { id } = this.props.comment
        this.props.dispatch(handlerVoteUpdate(id, option))  
    }

    render() {
        const { id, author, body, timestamp, voteScore } = this.props.comment
        return (
            <div className="comment"> 
                <div className="apresetation">
                    Commented by <span className="author">{author}</span> in <span>{formatDate(timestamp)}</span>
                </div>
                <div className="body">
                    {body}
                </div>
                {/* criar botoes de Editar e Exclruir comentario */}
                <div className="footer">
                    <VoteScore 
                        voteScore={voteScore}
                        scoreUpdate={this.scoreUpdateClick}
                    />
                    <div className="options">
                        <button className="edit-comment btn" >
                            <i class="fa fa-pencil" aria-hidden="true"></i>
                        </button>
                        <button className="delete-comment btn" >
                            <i class="fa fa-trash-o" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(Comment)