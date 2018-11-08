import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
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
            category: '',
            toHome: false

        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.onChangeCat = this.onChangeCat.bind(this)
        this.handlerSubmit = this.handlerSubmit.bind(this)
        this.updatePost = this.updatePost.bind(this)
    }

    componentDidMount() {
        if(this.props.post) {
            const { title, body, author, category } = this.props.post
            this.setState({
                title, body, author, category
            })
        }
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
        if(this.props.post) {
            this.updatePost()
        } else {
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

            this.props.dispatch(handlerAddNewPost(post))
            this.setState({ 
                title: '',
                body: '',
                author: '',
                category: '',
                toHome: true
             })
        }

    }

    updatePost() {
        const { id, voteScore, deleted, commentCount } = this.props.post
        const { title, body, author, category } = this.state
        const post = {
            id,
            title,
            body,
            author,
            category,
            voteScore,
            deleted,
            commentCount,
            timestamp: Date.now()
        }

//todo: provider a Action PUT /posts/:id	https://github.com/udacity/reactnd-project-readable-starter/blob/master/api-server/README.md
            console.log('update post ', post);

    }

    render() {
        if(this.state.toHome) {
            return <Redirect to="/" />
        }
        
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
