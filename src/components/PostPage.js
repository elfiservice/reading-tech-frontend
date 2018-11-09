import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './PostPage.css'

import Post from '../components/Post'
import Modal from './Modal'

class PostPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hideModal: true
        }
        this.showModal = this.showModal.bind(this)
        this.hideModal = this.hideModal.bind(this)
        this.deletePost = this.deletePost.bind(this)
    }

    showModal() {
        this.setState({ hideModal: false })
    }

    hideModal() {
        this.setState({ hideModal: true })
    }

    deletePost() {
        console.log('deleting post!!');
        
    }

    render() {
        const { id } = this.props.match.params
        return (
            <div className="post-page container">
                <Link to="/">Back to Posts</Link>
                <header className="header">
                    <h2>Post Details</h2>
                    <div className="edit-control">
                        <Link className="btn btn-primary" to={`/edit-post/${id}`} >
                            <i className="fa fa-pencil" aria-hidden="true"></i>
                        </Link>
                    </div>
                    <div className="remove-control">
                        <button className="btn btn-danger" onClick={this.showModal}>
                            <i className="fa fa-trash-o" aria-hidden="true"></i>    
                        </button>
                    </div>
                </header>
                <Post id={id} edit />
                <Modal hide={this.state.hideModal} >
                    <div className="delete-question">
                        Do you really want to Delete this post?
                        <div className="delete-bts">
                            <button className="btn btn-danger" onClick={this.deletePost}>
                                Yes
                            </button>
                            <button className="btn btn-default" onClick={this.hideModal}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default PostPage