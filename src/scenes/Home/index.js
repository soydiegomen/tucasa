import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux';
//Components
import Header from '../../components/Header';
import Sidebar from './components/Sidebar';
import ListHouses from './components/ListHouses';
import { getPublishedHouses } from '../../services/api/Houses';
import { fetchPublishedHouses } from '../../actions';

var MINPRICE = 0;
var MAXPRICE = 5000;

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
			rangePrice: {
        min: MINPRICE,
        max: MAXPRICE,
      }
    };

		this.handleUnselectFilter = this.handleUnselectFilter.bind(this);
  }

	componentWillMount() {
			this.updatePublishedHousesList();
  }

	//Check if some property change for apply filter and unpdate houses list
	componentDidUpdate(prevProps) {
    if (this.props.selectedOperation !== prevProps.selectedOperation ||
			this.props.selectedProperty !== prevProps.selectedProperty ||
			this.props.selectedKeyword !== prevProps.selectedKeyword ||
			this.props.selectedPriceRange !== prevProps.selectedPriceRange) {

			this.updatePublishedHousesList();
    }
  }

	//Call to service for update houses list
	updatePublishedHousesList(){
		const { dispatch, selectedOperation, selectedProperty, selectedKeyword, selectedPriceRange } = this.props;

		//Build JSON with filters information
		var filters = {
				selectedProperty,
				selectedOperation,
				selectedKeyword,
				selectedPriceRange
		};

		dispatch(fetchPublishedHouses(filters));
	}

	/*Unselect Filters*/
	handleUnselectFilter (e) {
    e.preventDefault();
		console.log('unselecte filter');
		let filters = this.state.filters;
		switch(e.target.id){
			case 'houseProperty':
				filters.houseProperty = null;
				break;
			case 'houseOperation':
					filters.houseOperation = null;
					break;
			case 'houseKeyword':
					filters.houseKeyword = null;
					break;
			case 'priceValue':
					//Reset price filter
					filters.priceValue.min = null;
					filters.priceValue.max = null;
					//Set default value of range price (for slider)
					var priceDefault = {
		        min: MINPRICE,
		        max: MAXPRICE,
		      };
					this.setState({ rangePrice: priceDefault });

					break;
		}

		//Update filter state
		this.setState({ filters : filters });
		//Call service using the new filter
		//this.getListOfHouses(filters);
  }

	render() {
    	return (
    		  <div className="Home">
            <Header />
	      		<div className="container-fluid">
							<div className="row">
								<div id="sidebar" className="col-md-3">
									<Sidebar
									appliedFilters = {this.state.filters}/>
								</div>
								<div id="houses-content" className="col-md-9">
									<ListHouses houses={this.state.houses} selectedFilters={this.state.filters}
									 	handleUnselectFilter={this.handleUnselectFilter}/>
								</div>
							</div>
            </div>
	      	</div>
	    );
  	}
}
function mapStateToProps(state) {
  const {
		selectedOperation,
		publishedHouses,
		selectedProperty,
		selectedKeyword,
		selectedPriceRange
	} = state;

  return {
    selectedOperation,
		publishedHouses,
		selectedProperty,
		selectedKeyword,
		selectedPriceRange
  }
}

export default connect(mapStateToProps)(Home);
