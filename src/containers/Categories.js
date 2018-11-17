import React from 'react'
import './Categories.css'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'
import NewCategory from '../components/NewCategory'

const Categories = (props) => {
    return (
        <div className="categories"> 
            <div className="header">
                <h2>Categories</h2>
                <NewCategory />
            </div>
            <ul className="cat-list">
                <li>
                    <Link to={`/`}>all</Link>
                </li>
                {props.categories.map(cat => (
                    <li key={cat.name}>
                        <Link to={`/${cat.path}`}>{cat.name}</Link>
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