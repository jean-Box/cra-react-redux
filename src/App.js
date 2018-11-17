import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';

import { simpleAction, imageClick } from './actions/simpleAction'
import { getRotation } from './reducers/simpleReducer';

const mapStateToProps = state => {
  console.log("mapStateToProps", state)
  return {
    
    rotation: getRotation(state)
  }
 }

 const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction()),
  imageClick:() => dispatch(imageClick())
 })

class App extends Component {
  constructor(props) {
    super(props)
  }

  simpleAction = (event) => {
    this.props.simpleAction()
   }
   imageClick = (event) => {
     this.props.imageClick()
   }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} 
            className={this.props.rotation ? "App-logo-horaire" : "App-logo-anti-horaire"} 
            alt="logo"
            onClick={this.imageClick} />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org"
            target="_blank" rel="noopener noreferrer" 
          >
            Learn React
          </a>
          <button onClick={this.simpleAction}>Test redux action</button>
          <pre>
            {JSON.stringify(this.props)}
          </pre>
        </header>
      </div>
    );
  }
}

const { bool } = PropTypes

App.propTypes = {
  rotation: bool
}

export default connect(mapStateToProps, mapDispatchToProps)(App);