import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux';
//Components
import Header from 'components/Header';
import Footer from 'components/Footer';
//Actions
import { fetchPublishedHouses, resetActivePage } from '../../actions';

var MINPRICE = 0;
var MAXPRICE = 5000;

class Main extends Component {

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
  }

	componentWillMount() {
			this.updatePublishedHousesList();
  }

	//Check if some property change for apply filter and unpdate houses list
	componentDidUpdate(prevProps) {
    if (this.props.selectedOperation !== prevProps.selectedOperation ||
			this.props.selectedProperty !== prevProps.selectedProperty ||
			this.props.selectedKeyword !== prevProps.selectedKeyword ||
			this.props.selectedPriceRange !== prevProps.selectedPriceRange
		) {
			this.updatePublishedHousesList();
    }
  }

	//Call to service for update houses list
	updatePublishedHousesList(){
		const {
			dispatch,
			selectedOperation,
			selectedProperty,
			selectedKeyword,
			selectedPriceRange
		} = this.props;

		//Build JSON with filters information
		var filters = {
				selectedProperty,
				selectedOperation,
				selectedKeyword,
				selectedPriceRange
		};

		dispatch(fetchPublishedHouses(filters));
		dispatch(resetActivePage());
	}

	render() {
    	return (
    		  <div className="Home">
						<div className="main-title">
							<Header customClass="landing" />
							<div className="home-title">
								<h1 className="display-4">Encuentra tu próximo hogar</h1>
							</div>
						</div>
	      		<div className="container-fluid">
							<div className="row">
								<div id="sidebar" className="col-md-3">

								</div>
								<div id="houses-content" className="col-md-9">

								</div>
							</div>
            </div>
						<Footer />
	      	</div>
	    );
  	}
}
function mapStateToProps(state) {
  const {
		selectedOperation,
		selectedProperty,
		selectedKeyword,
		selectedPriceRange
	} = state;

  return {
    selectedOperation,
		selectedProperty,
		selectedKeyword,
		selectedPriceRange
  }
}

export default connect(mapStateToProps)(Main);
