import React from 'react'
import { connect } from 'react-redux'

const PostList = (props) => {
    console.log(props.postsIds);
    
    return (
        <ul className="post-list">
            {props.postsIds.map(id => (
                <li key={id}>
                    <div>post id = {id}</div>
                </li>
            ))}
        </ul>
    )
}

function mapStateToProps({ posts }) {
    return {
        postsIds: Object.keys(posts)
      .sort((a,b) => posts[b].timestamp - posts[a].timestamp)
    }
}

export default connect(mapStateToProps)(PostList)