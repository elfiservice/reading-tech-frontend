import React, { Fragment } from 'react'

import CategoryItem from './CategoryItem'

const CategoryList = (props) => {
    return (
        <Fragment>
            {props.categories.map(cat => (
                <li key={cat.name}>
                    <CategoryItem cat={cat} deleteBtn={props.deleteBtn} />
                </li>
            ))}
        </Fragment>
    )
}

export default CategoryList