import React from 'react'
import './PostPage.css'

import Post from '../components/Post'

const PostPage = (props) => {
    const { id } = props.match.params
    return (
        <div className="post-page container">
        <h2>Post Details</h2>
        <Post id={id} />
    </div>
    )
}

export default PostPage