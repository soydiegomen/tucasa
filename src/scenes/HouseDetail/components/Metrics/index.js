import React, { Component } from 'react';

class Metrics extends Component {

  render() {
      return (
        <div  className="house-metrics">
          <div className="row ">
            <div className="col-md-2 metric-data">
              <a href="#" className="home-link no-underline">
                <i className="fa fa-heart" aria-hidden="true"></i>
              </a>
              <span>2,315</span>
            </div>
            <div className="col-md-2 metric-data">
              <i className="fa fa-eye" aria-hidden="true"></i>
              <span>850</span>
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

export default Metrics;
