import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import './PostPage.css'

import Post from '../components/Post'
import Modal from './Modal'
import { handlerDeletePost } from '../actions/share'

class PostPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hideModal: true,
            goHome: false
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
        const { post_id } = this.props.match.params
        this.props.dispatch(handlerDeletePost(post_id))
        this.hideModal()
        this.setState({ goHome: true })
    }

    render() {
        if(this.state.goHome) {
            return <Redirect to="/" />
        }
        const { post_id, category } = this.props.match.params
        return (
            <div className="post-page container">
                <Link to="/">Back to Posts</Link>
                <header className="header">
                    <h2>Post Details</h2>
                    <div className="edit-control">
                        <Link className="btn btn-primary" to={`/${category}/${post_id}/edit`} >
                            <i className="fa fa-pencil" aria-hidden="true"></i>
                        </Link>
                    </div>
                    <div className="remove-control">
                        <button className="btn btn-danger" onClick={this.showModal}>
                            <i className="fa fa-trash-o" aria-hidden="true"></i>    
                        </button>
                    </div>
                </header>
                <Post id={post_id} edit />
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

export default connect()(PostPage)