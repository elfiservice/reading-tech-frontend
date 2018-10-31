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
                
                <PostList orderBy={this.state.orderBy} category={category} />
            </div>
        )
    }
}

export default Posts