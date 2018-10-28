import React from 'react'
import { connect } from 'react-redux'

const Categories = (props) => {
    return (
        <div className="categories"> 
            <h2>Categories</h2>
            <ul className="cat-list">
                {props.categories.map(cat => (
                    <li key={cat.name}>
                        {cat.name}
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