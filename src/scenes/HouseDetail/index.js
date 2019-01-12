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
/*Action*/
import {
	fetchHouse,
	addHouseMetrics,
	setLike
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
  }

	handleAddLike (e) {
    e.preventDefault();

		const {
			dispatch
		} = this.props;

		const houseId = this.props.match.params.houseId
		const isLiked = this.props.isLiked;

		//This action updte metrics and get values
		dispatch(addHouseMetrics(houseId, 'likes'));
		dispatch(setLike(!isLiked));
  }

	render() {
			const house = this.props.house;
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
	const { house, isLiked } = state;
  return { house, isLiked };
}

export default connect(mapStateToProps)(HouseDetail);
