import React from 'react'
import Home from './Home'

const Category = (props) =>  (
    <Home category={props.match.params.cat_name.replace(/_/g," ")} /> 
)

export default Category