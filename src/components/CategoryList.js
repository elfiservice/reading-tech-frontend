import React, { Fragment } from 'react'

import CategoryItem from './CategoryItem'

const CategoryList = (props) => {
    return (
        <Fragment>
            {props.categories.map((cat, index) => (
                <li key={index}>
                    <CategoryItem 
                        cat={cat} 
                        deleteBtn={props.deleteBtn} 
                        actions={props.actions}
                        posts={props.posts}
                    />
                </li>
            ))}
        </Fragment>
    )
}

export default CategoryList