import React, { Component } from 'react'
import './NewCategory.css'
import Modal from './Modal'
import InputText from './TypeText'

class NewCategory extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            hideModal: true,
            category: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handlerModal = this.handlerModal.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    handleInputChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handlerModal() {
        this.setState((currentState) => {
            const hideModal = currentState.hideModal ? false : true;
            return { hideModal }
        })
    }

    submitForm(e) {
        e.preventDefault()
        console.log('salvando cat');
        
    }

    render() {
        return (
            <div>
                <button 
                    className="btn btn-success btn-add-new-category"
                    onClick={this.handlerModal}
                >Add</button>
                <Modal hide={this.state.hideModal} classSelector="new-category-modal">
                    <form className="form" onSubmit={this.submitForm}>
                        <InputText
                            name="category"
                            placeholder="Type the new category"
                            value={this.state.category}
                            onChange={this.handleInputChange}
                            required
                        />
                        <button className="btn btn-success">Save</button>
                    </form>
                    <button className="btn" onClick={this.handlerModal}>Cancel</button>
                </Modal>
            </div>
        )
    }
}

export default NewCategory