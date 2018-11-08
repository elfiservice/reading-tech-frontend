import React from 'react'
import { Link } from 'react-router-dom'
import './PostPage.css'

import Post from '../components/Post'

const PostPage = (props) => {
    const { id } = props.match.params
    return (
        <div className="post-page container">
            <Link to="/">Back to Posts</Link>
            <header className="header">
                <h2>Post Details</h2>
                <div className="edit-control">
                    <Link className="btn btn-primary" to={`/edit-post/${id}`} >
                        edit
                    </Link>
                </div>
            </header>

            <Post 
                id={id}
                edit
                />
        </div>
    )
}

export default PostPage