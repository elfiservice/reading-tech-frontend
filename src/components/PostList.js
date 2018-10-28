import React from 'react'
import { connect } from 'react-redux'

import Post from './Post'

const PostList = (props) => {
    return (
        <div className="post-list">
            {props.postsIds.map( id => <Post key={id} id={id} /> )}
        </div>
    )
}

function mapStateToProps({ posts }) {
    return {
        postsIds: Object.keys(posts)
            .sort((a,b) => posts[b].timestamp - posts[a].timestamp)
    }
}

export default connect(mapStateToProps)(PostList)