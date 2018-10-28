import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux';

class HouseFeatures extends Component {

  render() {
      return (
        <div  className="house-features">
          <div className="row ">
            <div className="col-md-4 text-center feture-item">
              <i className="fa fa-bed" aria-hidden="true"></i>
              <span>{this.props.house.noBedrooms}</span>
            </div>
            <div className="col-md-4 text-center feture-item">
              <i className="fa fa-bath" aria-hidden="true"></i>
              <span>{this.props.house.noBathrooms}</span>
            </div>
            <div className="col-md-4 text-center feture-item">
              <i className="fa fa-car" aria-hidden="true"></i>
              <span>{this.props.house.noParking}</span>
            </div>
          </div>
        </div>
      );
    }
}
function mapStateToProps(state) {
	const { house } = state;
  return { house };
}

export default connect(mapStateToProps)(HouseFeatures);
