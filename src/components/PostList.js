import React from 'react'
import _ from 'lodash'

import Post from './Post'

const PostList = (props) => {
    if(_.isEmpty(props.posts)) {
        return   <div className="post-list alert alert-info">No posts to show yet, be the firt one!</div>
    }

    const orderByThePosts = () => {
        const { posts , orderBy } = props;
        const postsIds = Object.keys(posts)
            .sort((a,b) => {
                if(orderBy === 'date') {
                    return posts[b].timestamp - posts[a].timestamp
                } else {
                    return posts[b].voteScore - posts[a].voteScore
                }
            })

        return postsIds.map( id => <Post key={id} id={id} /> )
    }

    return (
        <div className="post-list">
            {orderByThePosts()}
        </div>
    )
}

export default PostList