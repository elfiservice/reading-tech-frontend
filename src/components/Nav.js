import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = (props) => {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/">
                        Tech Read
                    </Link>

                        <Link to="/new-post" className="btn btn-success new-post">
                            <i className="fa fa-plus" aria-hidden="true"></i>
                            New Post
                        </Link>
         
                </div>
            </div>
        </nav>
    )
}

export default Nav