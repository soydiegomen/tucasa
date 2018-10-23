import React, { Component } from 'react';

class HouseMap extends Component {

  render() {
      return (
        <div className="house-section">
            <h4>Ubicación</h4>
            <p>
              LL Calle Alcatraz, Col Javier Barrios
            </p>
            <div className="map-container">
              <h3>Map must be here!</h3>
            </div>
        </div>
      );
    }
}

export default HouseMap;
