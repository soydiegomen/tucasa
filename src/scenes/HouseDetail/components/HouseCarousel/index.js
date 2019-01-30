import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux';
//components
import { Slide } from 'react-slideshow-image';
import { buildHouseImage } from 'services/utilities/ImageHelper';

const slideImages = [
  'http://public.tucasa.com:3300/static/uploads/2017/10/12/min-1507865283058-dies-a.jpg',
  'http://public.tucasa.com:3300/static/uploads/2017/10/12/min-1507865283058-dies-a.jpg'
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}

class HouseCarousel extends Component {
  render() {
    const filesData = this.props.house.filesData;
    return (
        <div>
          <Slide {...properties}>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                <span>Slide 1</span>
              </div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                <span>Slide 2</span>
              </div>
            </div>
          </Slide>

        </div>
    );
  }
}

function mapStateToProps(state) {
	const { house } = state;
  return { house };
}

export default connect(mapStateToProps)(HouseCarousel);
/*
<div className="house-images">
  <div className="house-image-content">
    {
      (filesData.length === 0) &&
      <div className="alert alert-secondary">
        Esta propiedad no tiene una imágen establecida
      </div>
    }
    {
      (filesData.length > 0) && buildHouseImage(filesData[0].fileUrl)
    }
  </div>
</div>
*/
