import React from 'react'
import { bindActionCreators } from 'redux';
import './Categories.css'
import { connect } from 'react-redux'

import { handlerDeleteCategory, handlerAddCategory, handlerUpdateCategory } from '../actions/categories'

import { Link } from 'react-router-dom'
import NewCategory from '../components/NewCategory'
import CategoryList from '../components/CategoryList'

const Categories = (props) => {
    function deleteBtn(e, cat) {
        e.preventDefault()
        if(checkExistPostToCategory(cat)) {
            alert('Ops! Have any Post registred to this category!');
            return false;
        }
        props.actions.handlerDeleteCategory(cat)
    }

    function checkExistPostToCategory(cat) {
        const checking = props.posts.filter( post => (
            post.category.localeCompare(cat.name) === 0 
            && post.deleted === false
        ));
        return checking.length > 0;
    }
    
    return (
        <div className="categories"> 
            <div className="header">
                <h2>Categories</h2>
                <NewCategory actions={props.actions} categories={props.categories} />
            </div>
            <ul className="cat-list">
                <li>
                    <Link to={`/`}>all</Link>
                </li>
                <CategoryList 
                    categories={props.categories} 
                    deleteBtn={deleteBtn} 
                    actions={props.actions} 
                />
            </ul>   
        </div>
    )
}

function mapStateToProps({ posts, categories }) {
    return {
        categories: Object.values(categories),
        posts: Object.values(posts)
    }
}

function mapDispatchToProps(dispatch) {
    const actions = bindActionCreators({ 
        handlerDeleteCategory,
        handlerAddCategory,
        handlerUpdateCategory
     }, dispatch);
    return { actions }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)