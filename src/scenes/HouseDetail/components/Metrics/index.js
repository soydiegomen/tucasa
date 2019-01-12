import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux';

class Metrics extends Component {

  constructor() {
    super();
  }

  render() {
      const { houseMetrics, house, isLiked } = this.props;
      //Format last modification date
      const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
      //The propertie lastModification must be parsed to Date for can able to format its value
      const lastModification = new Date(house.lastModification).toLocaleString('es-MX', options);
      return (
        <div  className="house-metrics">
          <div className="row ">
            <div className="col-md-2 metric-data">
              <a href="#Me-gusta" className="home-link no-underline"
                className={isLiked ? "home-link no-underline active": "home-link no-underline"}  onClick={this.props.onClickLike}>
                <i className="fa fa-heart" aria-hidden="true"></i>
              </a>
              <span>{houseMetrics.likes}</span>
            </div>
            <div className="col-md-2 metric-data">
              <i className="fa fa-eye" aria-hidden="true"></i>
              <span>{houseMetrics.views}</span>
            </div>
            <div className="col-md-3 metric-data">
              <i className="fa fa-calendar" aria-hidden="true"></i>
              <span>{lastModification}</span>
            </div>
          </div>
        </div>
      );
    }
}
function mapStateToProps(state) {
	const { houseMetrics, house, isLiked } = state;
  return { houseMetrics, house, isLiked };
}

export default connect(mapStateToProps)(Metrics);
