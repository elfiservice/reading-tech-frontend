import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = (props) => {
    return (
        <div className="container container-main">
            <h2>Ops! Page not found</h2>
            <p>Sorry, but this url does not match with any url to this website!</p>
            <p><Link to="/" >Back to Posts</Link></p>
        </div>
    )
}

export default Page404