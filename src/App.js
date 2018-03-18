import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//Bootstrp3
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//Custom style
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
