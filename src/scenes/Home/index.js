import React, { Component } from 'react';
//Components
import Header from '../../components/Header';

class Home extends Component {
	render() {
    	return (
    		  <div className="Home">
            <Header />
	      		<div>
              <h3>Home component!!</h3>
            </div>
	      	</div>
	    );
  	}
}

export default Home;
