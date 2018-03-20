import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//CSSs Frameworks
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.css'
//TuCasa style
import './App.css';
//Scenes
import Home from './scenes/Home';


class App extends Component {
  render() {
    return (
      <Router >
  			<div>
  				<Route exact path="/" component={Home} />
  			</div>
  		</Router>
    );
  }
}

export default App;
