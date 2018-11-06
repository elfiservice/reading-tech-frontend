import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

const Nav = (props) => {
    return (
        <header>
            <nav className="navbar navbar-dark fixed-top bg-dark">

                        <Link className="navbar-brand" to="/">
                            Tech Read
                        </Link>

                            <Link to="/new-post" className="btn btn-success new-post">
                                <i className="fa fa-plus" aria-hidden="true"></i>
                                New Post
                            </Link>

            </nav>
        </header>
    )
}

export default Nav