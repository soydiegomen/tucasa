import React, { Component } from 'react';
//Components
import Header from '../../components/Header';
import Sidebar from './components/Sidebar';
import ListHouses from './components/ListHouses';
import { getPublishedHouses } from '../../services/api/Houses';

class Home extends Component {

	constructor () {
    super();

    this.state = {
      houses: [],
			filters: { houseProperty : null },
			houseType: null
    };

		this.handleSelectProperty = this.handleSelectProperty.bind(this);
  }

	componentWillMount() {
			this.getListOfHouses(this.state.filters);
  }

	//Si trato de sacar los filtros directo del state, hay ocaciones donde
	//El state aún no ha aplicado el cambio, siendo que ya se ha seleccionado el filtro a aplicar
	getListOfHouses(filters) {
		console.log('getListOfHouses', filters );
		getPublishedHouses(filters.houseProperty).then(
			(houses) => {
				this.setState({ houses });
      }
		);
	}

	/*Handlers*/
	handleSelectProperty (e) {
    console.log('propertyselected home', e.target.id);
		let filters = this.state.filters;
		filters.houseProperty = e.target.id;
		//Update filter state
		this.setState({ filters : filters });
		//Call service using the new filter
		this.getListOfHouses(filters);
  }

	render() {
    	return (
    		  <div className="Home">
            <Header />
	      		<div className="container-fluid">
							<div className="row">
								<div id="sidebar" className="col-md-3">
									<Sidebar selectedPropertyHandle={this.handleSelectProperty} />
								</div>
								<div id="houses-content" className="col-md-9">
									<ListHouses houses={this.state.houses} />
								</div>
							</div>
            </div>
	      	</div>
	    );
  	}
}

export default Home;
