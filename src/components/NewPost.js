import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NewPost.css'
import FormPost from './FormPost'

class NewPost extends Component {
    render() {
        return (
            <div className="newpost container">
                <header>
                    <Link to="/">Back to Posts</Link>
                    <h2>New Post</h2>
                </header>
                <FormPost />
            </div>
        )
    }
}

export default NewPost