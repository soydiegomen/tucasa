import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//CSSs Frameworks
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.css'
import '../node_modules/react-input-range/lib/css/index.css';
//TuCasa style
import './App.css';
//Scenes
import Home from './scenes/Home';
import HouseDetail from './scenes/HouseDetail';


class App extends Component {
  render() {
    return (
      <Router >
  			<div>
  				<Route exact path="/" component={Home} />
          <Route exact path="/propiedad/:houseId" component={HouseDetail} />
  			</div>
  		</Router>
    );
  }
}

export default App;
