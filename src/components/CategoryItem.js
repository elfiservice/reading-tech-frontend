import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class CategoryItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editEnable: false,
            category: '',
        }
        this.toggleEditBtn = this.toggleEditBtn.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.saveEditedCategory = this.saveEditedCategory.bind(this);
    }

    componentDidMount() {
        const category = this.props.cat.name
        this.setState({ category })
    }

    handleInputChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    
    toggleEditBtn() {
        this.setState(( currentState ) => {
            const newState = (currentState.editEnable ? false : true);
            return { editEnable: newState }
        })
    }

    renderCategory() {
        const { cat } = this.props
        if(this.state.editEnable) {
            return (
                <div className="cat-content">
                    <input name="category" value={this.state.category} onChange={this.handleInputChange} />
                    <button className="btn btn-success btn-edit-comment" onClick={this.saveEditedCategory}>
                        <i className="fa fa-check" aria-hidden="true"></i>
                    </button>
                </div>
                )
        } else {
            const { deleteBtn } = this.props
            return (
                <Link to={`/${cat.path}`}>
                    <div className="cat-content">
                        <span>{cat.name}</span>
                        <div className="category-controls">
                            <button className="edit-comment btn" onClick={this.toggleEditBtn} >
                                <i className="fa fa-pencil" aria-hidden="true"></i>
                            </button>
                            <button className="btn" onClick={(e) => deleteBtn(e, cat)}>
                                <i className="fa fa-trash-o" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </Link>)
        }
    }

    saveEditedCategory() {
        console.log('salvando cat ', this.state.category);
        
    }

    render() {
        return (
                <div> {this.renderCategory()} </div> 
        )
    }
}

export default CategoryItem