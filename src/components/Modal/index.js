import React, { Component } from 'react'
import './Modal.css'

/**
 * Modal Structure
 *
 * @prop {boolean} hide (required)
 * @prop {string} classSelector (optional - save when have more than one Modal on same component)
 * @return {JSX} any element or component into this Modal compt
 */
class Modal extends Component {
    render() {
        let classSelector = 'modal_window'
        if(this.props.classSelector) {
            classSelector = this.props.classSelector
        }
        let modal = document.querySelector('.' + classSelector + '')
        if(!this.props.hide && modal) {
            modal.classList.add("show");
        } else if(this.props.hide && modal) {
            modal.classList.remove("show");
        }

        return (
            <div className={classSelector + ' modal'} >
                <article className="modal_content" role="dialog">
                    {this.props.children}
                </article>
            </div>
        )
    }
}

export default Modal