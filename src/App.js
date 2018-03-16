import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//Bootstrp3
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//Scenes
import Home from './scenes/Home';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <br/>
        <div  className="alert alert-success">
          <span  className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
          <span  className="sr-only">Error:</span>
          Bootstrap is working ok.
          <button type="button" className="btn btn-primary">Primary</button>
        </div>
        <div>
          <Home />
        </div>
      </div>
    );
  }
}

export default App;
