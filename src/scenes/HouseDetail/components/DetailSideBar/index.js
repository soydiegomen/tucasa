import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux';
//Components
import HouseFeatures from './components/HouseFeatures';
import ContactDetails from './components/ContactDetails';

class DetailSideBar extends Component {

  render() {
      const { house } = this.props;
      return (
        <div>
          <div className="filter-header">
            {
              house.price &&
              <h3>
                ${house.price} {house.priceType}
              </h3>
            }
            {
              !house.price &&
              <span>
                El precio no esta definido
              </span>
            }
          </div>
          <HouseFeatures />
          <ContactDetails />
        </div>
      );
    }
}

function mapStateToProps(state) {
	const { house } = state;
  return { house };
}

export default connect(mapStateToProps)(DetailSideBar);
