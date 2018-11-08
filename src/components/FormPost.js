import React, { Component } from 'react'
import { connect } from 'react-redux'
import './FormPost.css'

import InputText from '../components/TypeText'
import TextArea from './TypeTextarea'

import { generateUniqueId } from '../util/helpers'

import { handlerAddNewPost } from '../actions/posts'

class FormPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            body: '',
            author: '',
            category: ''

        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.onChangeCat = this.onChangeCat.bind(this)
        this.handlerSubmit = this.handlerSubmit.bind(this)
    }

    handleInputChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    onChangeCat(event) {
        this.setState({category: event.target.value});
    }

    handlerSubmit(e) {
        e.preventDefault()
        const { title, body, author, category } = this.state
        const post = {
            id: generateUniqueId(),
            title,
            body,
            author,
            category,
            voteScore: 0,
            deleted: false,
            commentCount: 0,
            timestamp: Date.now()
        }
        console.log('save data post ', post);
        //criar Action para salvar no DB
       this.props.dispatch(handlerAddNewPost(post))
    }

    render() {
        return (
            <div className="form-post">
                <form className="form" onSubmit={this.handlerSubmit}>
                    <InputText
                        name="title" 
                        placeholder="Title"
                        type="text"
                        value={this.state.title} 
                        onChange={this.handleInputChange}
                        required={true}
                        maxlength="50"
                        autoFocus
                    />
                    <TextArea 
                        class="body"
                        name="body" 
                        placeholder="Text a body post"
                        value={this.state.body} 
                        onChange={this.handleInputChange}
                        required={true}
                    />
                    <InputText
                        name="author" 
                        placeholder="Your Name"
                        type="text"
                        value={this.state.author} 
                        onChange={this.handleInputChange}
                        required={true}
                        maxlength="20"
                    />
                    <select 
                        className="cat-select" 
                        defaultValue={this.state.category} 
                        onChange={this.onChangeCat}
                        required
                    >
                        <option value="" disabled>Select category</option>
                        {this.props.categories.map(cat => (
                            <option key={cat.name} value={cat.name}>{cat.name}</option>
                        ))}
                    </select>
                    <button className="btn btn-success">Save</button>
                </form>    
            </div>
        )
    }
}

function mapStateToProps({ categories }) {
    return {
        categories: Object.values(categories)
    }
}

export default connect(mapStateToProps)(FormPost)