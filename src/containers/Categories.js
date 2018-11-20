import React from 'react'
import { bindActionCreators } from 'redux';
import './Categories.css'
import { connect } from 'react-redux'

import { handlerDeleteCategory, handlerAddCategory } from '../actions/categories'

import { Link } from 'react-router-dom'
import NewCategory from '../components/NewCategory'

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
                {props.categories.map(cat => (
                    <li key={cat.name}>
                        <Link to={`/${cat.path}`}>
                            <div className="cat-content">
                                <span>{cat.name}</span>
                                <button className="btn" onClick={(e) => deleteBtn(e, cat)}>
                                    <i className="fa fa-trash-o" aria-hidden="true"></i>
                                </button>
                            </div>
                        </Link>
                    </li>
                ))}
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
        handlerAddCategory
     }, dispatch);
    return { actions }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)