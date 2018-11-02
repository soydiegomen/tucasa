import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux';
//components
import { buildHouseImage } from 'services/utilities/ImageHelper';

class HouseCarousel extends Component {

  render() {
    const filesData = this.props.house.filesData ? this.props.house.filesData : [];
    return (
        <div className="house-images">
          <div className="house-image-content">
            {
              (filesData.length > 0) && buildHouseImage(filesData[0].fileUrl)
            }
          </div>
        </div>
    );
  }
}

function mapStateToProps(state) {
	const { house } = state;
  return { house };
}

export default connect(mapStateToProps)(HouseCarousel);
