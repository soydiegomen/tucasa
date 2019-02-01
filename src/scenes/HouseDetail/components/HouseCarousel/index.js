import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux';
//components
import { Slide } from 'react-slideshow-image';
import { Fade } from 'react-slideshow-image';
import { buildHouseImage, buildHouseImageLink } from 'services/utilities/ImageHelper';

const slideImages = [
  'http://public.tucasa.com:3300/static/uploads/2017/10/12/min-1507865283058-dies-a.jpg',
  'http://public.tucasa.com:3300/static/uploads/2017/10/12/min-1507865309837-tres-a.jpg'
];

const properties = {
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}

class HouseCarousel extends Component {

  renderCarousel (filesData) {
    return (
      <Slide {...properties}>
        {
          filesData.map((each, index) => {
              return <div className="each-slide" key={index}>
                <div style={{
                    'backgroundImage': 'url(' + buildHouseImageLink(each.fileUrl) +')'
                  }}>
                </div>
              </div>
          })
        }
    </Slide>
    );
  }

  render() {
    const filesData = this.props.house.filesData;

    if(filesData.length === 0){
      return <div className="alert alert-secondary">
        Esta propiedad no tiene una imágen establecida
      </div>
    }else{
      return this.renderCarousel(filesData);
    }
  }
}

function mapStateToProps(state) {
	const { house } = state;
  return { house };
}

export default connect(mapStateToProps)(HouseCarousel);
