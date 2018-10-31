import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { handleInitialData } from '../actions/share'

import Nav from './Nav'
import Routes from '../routes'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          {
            this.props.loading === true 
              ? null
              : <Routes /> 
          }
        </div>
      </Router>
    );
  }
}

function mapStateToProps({ posts }) {
  return {
    loading: posts === {}
  }
}

export default connect(mapStateToProps)(App);
