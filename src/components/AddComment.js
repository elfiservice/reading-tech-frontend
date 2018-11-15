import React, { Component } from 'react'
import './AddComment.css'

import { formatComment } from '../util/helpers'

import InputText from '../templates/InputText'

class AddComment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comment: '',
            author: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInputChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault()
        const { comment, author } = this.state
        const commentToDB = formatComment(comment, author, this.props.postId)
        this.props.addComment(commentToDB);
        this.setState({ comment: '', author: '' })
    }

    render() {
        return (
            <div className="add-comment"> 
                <form className="form" onSubmit={this.handleSubmit}>
                    <InputText
                        name="comment"
                        placeholder="Comment this post"
                        value={this.state.comment}
                        onChange={this.handleInputChange}
                        required={true}
                    />
                    <InputText
                        name="author"
                        placeholder="Your name"
                        value={this.state.author}
                        onChange={this.handleInputChange}
                        required={true}
                    />
                    <button className="btn btn-success">
                        <i className="fa fa-comment" aria-hidden="true"></i>
                    </button>
                </form>
            </div>
        )
    }
}

export default AddComment;