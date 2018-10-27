import React from 'react'

import Nav from './Nav'
import Categories from './Categories'

const Home = (props) => {
    return (
        <div className="home"> 
            <Nav />
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <Categories />
                    </div>
                    <div className="col-md-8">
                        <h2>Post List</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home