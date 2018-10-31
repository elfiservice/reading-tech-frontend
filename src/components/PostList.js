import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'

import Post from './Post'

const PostList = (props) => {
    return (
        <div className="post-list">
            {props.postsIds.map( id => <Post key={id} id={id} /> )}
        </div>
    )
}

function mapStateToProps({ posts }, { orderBy, category }) {
    if(category) {
        let postsByCategory = Object.values(posts).filter( post => post.category === category )
        posts = _.mapValues(_.keyBy(postsByCategory, 'id'))
    }
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