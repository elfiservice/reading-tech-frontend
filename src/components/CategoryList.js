import React, { Fragment } from 'react'

import { Link } from 'react-router-dom'

const CategoryList = (props) => {
    return (
        <Fragment>
            {props.categories.map(cat => (
                <li key={cat.name}>
                    <Link to={`/${cat.path}`}>
                        <div className="cat-content">
                            <span>{cat.name}</span>
                            <button className="btn" onClick={(e) => props.deleteBtn(e, cat)}>
                                <i className="fa fa-trash-o" aria-hidden="true"></i>
                            </button>
                        </div>
                    </Link>
                </li>
            ))}
        </Fragment>
    )
}

export default CategoryList