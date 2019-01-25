import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux';
//Components
import Header from 'components/Header';
import Footer from 'components/Footer';
import HouseCarousel from './components/HouseCarousel';
import Metrics from './components/Metrics';
import HouseServices from './components/HouseServices';
import HouseMap from './components/HouseMap';
import DetailSideBar from './components/DetailSideBar';
import HouseDescription from './components/HouseDescription';
import { isLikedHouse } from 'services/utilities/LStorageHelper';
/*Action*/
import {
	fetchHouse,
	addHouseMetrics,
	setLike,
	toggleLike
 	} from 'actions';


class HouseDetail extends Component {

	constructor() {
    super();
    this.state = {};
    this.handleClickLike = this.handleAddLike.bind(this);
  }

	componentWillMount() {
		const {
			dispatch
		} = this.props;
		const houseId = this.props.match.params.houseId

		dispatch(fetchHouse(houseId));
		//This action updte metrics and get values
		dispatch(addHouseMetrics(houseId, 'views'));

		//Check if the house was liked in the past
		if(isLikedHouse(houseId)){
			dispatch(setLike(true));
		}
  }

	handleAddLike (e) {
    e.preventDefault();

		const { dispatch } = this.props;
		const houseId = this.props.match.params.houseId

		//This action updte likes and get new metrics
		dispatch(toggleLike(houseId));
  }

	render() {
			const house = this.props.house;
			let clicklikes = localStorage.getItem('clicklikes');
			console.log('clicklikes2', clicklikes);
			clicklikes = clicklikes ? clicklikes : 0;
    	return (
    		  <div>
            <Header />
            <div className="container">
							<div className="row">
								<div className="col-md-9 detail-main-content">
									<div className="house-summary">
										<h2>{house.title}</h2>
										<h5>{house.address.address}, {house.address.town}</h5>
									</div>
									<HouseCarousel />
									<Metrics onClickLike={this.handleClickLike} />
									<h1>{clicklikes}</h1>
									<HouseDescription />
									<HouseServices />
									<HouseMap />
								</div>
								<div className="col-md-3">
									<DetailSideBar />
								</div>
							</div>
						</div>
            <Footer />
	      	</div>
	    );
  	}
}

function mapStateToProps(state) {
	const { house } = state;
  return { house };
}

export default connect(mapStateToProps)(HouseDetail);
