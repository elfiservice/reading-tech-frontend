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

function mapStateToProps({ posts }, { orderBy }) {
    return {
        postsIds: Object.keys(posts)
            .sort((a,b) => {
                if(orderBy === 'date') {
                    return posts[b].timestamp - posts[a].timestamp
                } else {
                    return posts[b].voteScore - posts[a].voteScore
                }
            })
    }
}

export default connect(mapStateToProps)(PostList)