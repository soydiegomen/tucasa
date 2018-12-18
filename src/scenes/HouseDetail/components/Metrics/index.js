import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux';

class Metrics extends Component {

  constructor() {
    super();
    this.state = {};
    this.handleClickLike = this.handleAddLike.bind(this);
  }

  handleAddLike (e) {
    e.preventDefault();
    //var houseOperation = e.target.id;
    alert('Like!!');
  }

  render() {
      const { houseMetrics} = this.props;
      return (
        <div  className="house-metrics">
          <div className="row ">
            <div className="col-md-2 metric-data">
              <a href="#" className="home-link no-underline" onClick={this.handleAddLike}>
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
              <span>10/04/2017</span>
            </div>
          </div>
        </div>
      );
    }
}
function mapStateToProps(state) {
	const { houseMetrics } = state;
  return { houseMetrics };
}

export default connect(mapStateToProps)(Metrics);
