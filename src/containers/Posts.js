import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import _ from 'lodash'
import { connect } from 'react-redux'
import './Posts.css'
import PostList from '../components/PostList'
import { handlerVoteUpdate } from '../actions/posts'

class Posts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            orderBy: 'date'
        }
    }

    toggleOrderBy = () => {
        const toggle = this.state.orderBy === 'date' ? 'vote' : 'date'
        this.setState({ orderBy : toggle })
    }

    render() {
        const { category } = this.props
        return (
            <div className="posts">
                <div className="header">
                    <h2>All Posts</h2> { category && <span>to <b>{category}</b></span> }
                    <div className="order-control">
                        order by 
                        <button 
                            className="btn btn-danger"
                            onClick={this.toggleOrderBy}
                            >{this.state.orderBy}</button>
                    </div>
                </div>
                
                <PostList 
                    posts={this.props.posts} 
                    orderBy={this.state.orderBy}
                    actions={this.props.actions}
                />
            </div>
        )
    }
}

function mapStateToProps({ posts }, { category }) {
    let postsNotDeleted = Object.values(posts).filter( post => post.deleted === false )
    posts = _.mapValues(_.keyBy(postsNotDeleted, 'id'))

    if(category) {
        let postsByCategory = Object.values(posts).filter( post => post.category === category )
        posts = _.mapValues(_.keyBy(postsByCategory, 'id'))
    }
    return {
        posts
    }
}

function mapDispatchToProps(dispatch) {
    const actions = bindActionCreators({ 
        handlerVoteUpdate
     }, dispatch);
    return { actions }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
