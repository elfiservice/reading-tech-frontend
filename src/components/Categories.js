import React from 'react'
import './Categories.css'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'

const Categories = (props) => {
    return (
        <div className="categories"> 
            <h2>Categories</h2>
            <ul className="cat-list">
                {props.categories.map(cat => (
                    <li key={cat.name}>
                        <Link to={`/category/${cat.name}`}>{cat.name}</Link>
                    </li>
                ))}
            </ul>   
        </div>
    )
}

function mapStateToProps({ categories }) {
    return {
        categories: Object.values(categories)
    }
}

export default connect(mapStateToProps)(Categories)