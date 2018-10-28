import React from 'react'

import Categories from './Categories'
import PostList from './PostList'

const Home = (props) => {
    return (
        <div className="home"> 
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <Categories />
                    </div>
                    <div className="col-md-8">
                        <h2>All Posts</h2>
                        <PostList />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home