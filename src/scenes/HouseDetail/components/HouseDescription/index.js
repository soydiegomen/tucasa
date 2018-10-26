import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux';

class HouseDescription extends Component {

  render() {
      return (
        <div className="house-details">
          <div className="house-section">
              <h4>Descripción</h4>
              <p>
                {this.props.house.summary}
              </p>
          </div>
        </div>
      );
    }
}

function mapStateToProps(state) {
	const { house } = state;
  return { house };
}

export default connect(mapStateToProps)(HouseDescription);
