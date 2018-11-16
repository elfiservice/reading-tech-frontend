import React from 'react'
import Home from './Home'

const Category = (props) =>  (
    <Home category={props.match.params.cat_name} /> 
)

export default Category