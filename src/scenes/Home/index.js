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
			filters:
				{
					houseProperty : null,
					houseOperation : null,
					houseKeyword : null,
					priceValue: {
		        min: null,
		        max: null,
		      }
				},
			houseType: null,
			keywordSelected: null,
			priceValue: {
        min: 0,
        max: 5000,
      }
    };

		this.handleSelectProperty = this.handleSelectProperty.bind(this);
		this.handleSelectOperation = this.handleSelectOperation.bind(this);
		this.handleSearchKeyword = this.handleSearchKeyword.bind(this);
		this.handleChangeKeyword = this.handleChangeKeyword.bind(this);
		this.handleChangePrice = this.handleChangePrice.bind(this);
		this.handleChangePriceComplate = this.handleChangePriceComplate.bind(this);
		this.handleSelectPrice = this.handleSelectPrice.bind(this);
  }

	componentWillMount() {
			this.getListOfHouses(this.state.filters);
  }

	//Si trato de sacar los filtros directo del state, hay ocaciones donde
	//El state aún no ha aplicado el cambio, siendo que ya se ha seleccionado el filtro a aplicar
	getListOfHouses(filters) {
		console.log('getListOfHouses', filters );
		getPublishedHouses(filters).then(
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

	handleSelectOperation (e) {
    console.log('handleSelectOperation home', e.target.id);
		let filters = this.state.filters;
		filters.houseOperation = e.target.id;
		//Update filter state
		this.setState({ filters : filters });
		//Call service using the new filter
		this.getListOfHouses(filters);
  }

	handleSearchKeyword (e) {
    console.log('handleSearchKeyword home');
		e.preventDefault();
		let filters = this.state.filters;
		filters.houseKeyword = this.state.keywordSelected;
		//Update filter state
		this.setState({ filters : filters });
		//Call service using the new filter
		this.getListOfHouses(filters);
  }

	handleChangeKeyword(event) {
	  const value = event.target.value;
	  this.setState({
	    keywordSelected : value
	  });
	}

	/*Pricefilter*/
	handleChangePrice (value) {
		//console.log('home:' +  value);
		this.setState({ priceValue: value });
	}

	handleChangePriceComplate (value) {
		console.log(value);
	}

	handleSelectPrice () {
		console.log('handleSelectPrice');
		let filters = this.state.filters;
		filters.priceValue = this.state.priceValue;
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
									<Sidebar handleSelectProperty={this.handleSelectProperty}
									handleSelectOperation={this.handleSelectOperation}
									handleSearchKeyword={this.handleSearchKeyword}
									handleChangeKeyword={this.handleChangeKeyword}
									priceValue={this.state.priceValue}
									changePriceHandle={this.handleChangePrice}
									handleChangePriceComplate={this.handleChangePriceComplate}
									handleSelectPrice = {this.handleSelectPrice}
									appliedFilters = {this.state.filters}/>
								</div>
								<div id="houses-content" className="col-md-9">
									<ListHouses houses={this.state.houses}  />
								</div>
							</div>
            </div>
	      	</div>
	    );
  	}
}

export default Home;
