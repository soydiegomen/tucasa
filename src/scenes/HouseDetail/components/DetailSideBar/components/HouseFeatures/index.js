import React, { Component } from 'react';

class HouseFeatures extends Component {

  render() {
      return (
        <div  className="house-features">
          <div className="row ">
            <div className="col-md-4 text-center feture-item">
              <i className="fa fa-bed" aria-hidden="true"></i>
              <span>3</span>
            </div>
            <div className="col-md-4 text-center feture-item">
              <i className="fa fa-bath" aria-hidden="true"></i>
              <span>1</span>
            </div>
            <div className="col-md-4 text-center feture-item">
              <i className="fa fa-car" aria-hidden="true"></i>
              <span>2</span>
            </div>
          </div>
        </div>
      );
    }
}

export default HouseFeatures;
