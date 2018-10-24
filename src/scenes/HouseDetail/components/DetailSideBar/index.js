import React, { Component } from 'react';
//Components
import HouseFeatures from './components/HouseFeatures';
import ContactDetails from './components/ContactDetails';

class DetailSideBar extends Component {

  render() {
      return (
        <div>
          <div className="filter-header">
            <h3>
              $2,500 por mes
            </h3>
          </div>
          <HouseFeatures />
          <ContactDetails />
        </div>
      );
    }
}

export default DetailSideBar;
