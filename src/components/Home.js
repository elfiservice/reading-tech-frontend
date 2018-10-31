import React from 'react'

import Categories from './Categories'
import Posts from './Posts'

const Home = (props) => {
    return (
        <div className="home"> 
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <Categories />
                    </div>
                    <div className="col-md-8">
                        <Posts />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home