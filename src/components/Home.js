import React from 'react'
import './Home.css'

import Categories from '../containers/Categories'
import Posts from '../containers/Posts'

const Home = (props) => {
    return (
        <div className="home"> 
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <Categories />
                    </div>
                    <div className="col-md-8">
                        <Posts category={props.category ? props.category : undefined} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home