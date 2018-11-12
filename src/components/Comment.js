import React, { Component } from 'react'
import { connect } from 'react-redux'
import './Comment.css'

import { handlerVoteUpdate } from '../actions/comments'

import { formatDate } from '../util/helpers'
import VoteScore from './VoteScore'

class Comment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editEnable: false,
            body: ''
        }
        this.scoreUpdateClick = this.scoreUpdateClick.bind(this);
        this.toggleEditBtn = this.toggleEditBtn.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.saveEditedComment = this.saveEditedComment.bind(this);
    }

    componentDidMount() {
        const { body } = this.props.comment
        this.setState({ body })
    }

    handleInputChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    scoreUpdateClick(option) {
        const { id } = this.props.comment
        this.props.dispatch(handlerVoteUpdate(id, option))  
    }

    toggleEditBtn() {
        this.setState(( currentState ) => {
            const newState = (currentState.editEnable ? false : true);
            return { editEnable: newState }
        })
    }

    renderCommentBody(body) {
        if(this.state.editEnable) {
            return (
                <div className="edit-comment-form">
                    <input name="body" value={this.state.body} onChange={this.handleInputChange} />
                    <button className="btn btn-success btn-edit-comment" onClick={this.saveEditedComment}>
                        <i className="fa fa-check" aria-hidden="true"></i>
                    </button>
                </div>
                )
        } else {
            return <span>{body}</span>
        }
    }

    saveEditedComment() {
        const { id } = this.props.comment;
        const { body } = this.state;

        console.log(id, body);
        
    }

    render() {
        const { id, author, body, timestamp, voteScore } = this.props.comment
        return (
            <div className="comment"> 
                <div className="apresetation">
                    Commented by <span className="author">{author}</span> in <span>{formatDate(timestamp)}</span>
                </div>
                <div className="body">
                    {this.renderCommentBody(body)}
                </div>
                <div className="footer">
                    <VoteScore 
                        voteScore={voteScore}
                        scoreUpdate={this.scoreUpdateClick}
                    />
                    <div className="options">
                        <button className="edit-comment btn" onClick={this.toggleEditBtn} >
                            <i className="fa fa-pencil" aria-hidden="true"></i>
                        </button>
                        <button className="delete-comment btn" >
                            <i className="fa fa-trash-o" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(Comment)