import React, { Component } from 'react';
//Components
import Header from '../../components/Header';
import Sidebar from './components/Sidebar';
import ListHouses from './components/ListHouses';
import { getPublishedHouses } from '../../services/api/Houses';

class Home extends Component {

	componentWillMount() {

    console.log('WillMount');
		getPublishedHouses().then((listUsers) => {
            console.log(listUsers);
        });
  }

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
									<ListHouses />
								</div>
							</div>
            </div>
	      	</div>
	    );
  	}
}

export default Home;
