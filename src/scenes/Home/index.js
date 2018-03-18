import React, { Component } from 'react';
//Components
import Header from '../../components/Header';
import Sidebar from './components/Sidebar';

class Home extends Component {
	render() {
    	return (
    		  <div className="Home">
            <Header />
	      		<div className="container-fluid">
							<div className="row">
								<div id="sidebar" className="col-md-3">
									<Sidebar />
								</div>
								<div id="houses-content" className="col-md-9">
									houses-content
								</div>
							</div>
            </div>
	      	</div>
	    );
  	}
}

export default Home;
