import React, { Component } from 'react'
import './Posts.css'
import PostList from './PostList'

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
        return (
            <div className="posts">
                <div className="header">
                    <h2>All Posts</h2>
                    <div className="order-control">
                        order by 
                        <button 
                            className="btn btn-danger"
                            onClick={this.toggleOrderBy}
                            >{this.state.orderBy}</button>
                    </div>
                </div>
                
                <PostList orderBy={this.state.orderBy} />
            </div>
        )
    }
}

export default Posts