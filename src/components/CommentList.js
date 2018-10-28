import React, { Component } from 'react'
import { connect } from 'react-redux'

import { handleReceiveComments } from '../actions/comments'

class CommentList extends Component {
    componentDidMount() {
        this.props.dispatch(handleReceiveComments(this.props.postId))
    }

    render() {
        return (
            <div> See the Comments </div>
        )
    }
}

export default connect()(CommentList)