import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import _ from 'lodash'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import './PostPage.css'

import Post from '../components/Post'
import Modal from './Modal'
import { handlerDeletePost } from '../actions/share'
import { handlerVoteUpdate } from '../actions/posts'

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
        this.props.actions.handlerDeletePost(post_id)
        this.hideModal()
        this.setState({ goHome: true })
    }

    render() {
        if(this.state.goHome) {
            return <Redirect to="/" />
        }
        const { post, category, posts, actions } = this.props

        if(!posts) {
            return <div className="container container-main">Loading...</div>
        }

        if(!post) {
            return <Redirect to="/404" />
        }
        
        return (
            <div className="post-page container">
                <Link to="/">Back to Posts</Link>
                <header className="header">
                    <h2>Post Details</h2>
                    <div className="edit-control">
                        <Link className="btn btn-primary" to={`/${category}/${post.id}/edit`} >
                            <i className="fa fa-pencil" aria-hidden="true"></i>
                        </Link>
                    </div>
                    <div className="remove-control">
                        <button className="btn btn-danger" onClick={this.showModal}>
                            <i className="fa fa-trash-o" aria-hidden="true"></i>    
                        </button>
                    </div>
                </header>
                <Post post={post} edit actions={actions} />
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

function mapStateToProps({ posts }, props) {
    const postId = props.match.params.post_id
    const category = props.match.params.category
    const post = posts[postId]

    if(_.isEmpty(posts)) {
        posts = null
    }

    return {
        post,
        posts,
        category
    }
}

function mapDispatchToProps(dispatch) {
    const actions = bindActionCreators({ 
        handlerVoteUpdate,
        handlerDeletePost
     }, dispatch);
    return { actions }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage)