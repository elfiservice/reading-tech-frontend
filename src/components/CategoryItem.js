import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class CategoryItem extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { cat, deleteBtn } = this.props
        return (
            <Link to={`/${cat.path}`}>
            <div className="cat-content">
                <span>{cat.name}</span>
                <button className="btn" onClick={(e) => deleteBtn(e, cat)}>
                    <i className="fa fa-trash-o" aria-hidden="true"></i>
                </button>
            </div>
        </Link>
        )
    }
}

export default CategoryItem