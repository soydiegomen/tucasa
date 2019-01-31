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
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
}

class HouseCarousel extends Component {

  renderCarousel3 (filesData) {
    return (
      <div >
          <h1>Hello!</h1>
        </div>
      );
  }

  renderCarousel2 (filesData) {
    return (
      <Slide {...properties}>
      </Slide>
    );
  }

  renderCarousel (filesData) {
    return
      <Slide {...properties}>
      {
        filesData.map((each, index) =>
          {
            return <div className="each-slide" key={index}>
              <div style={{
                'backgroundImage': 'url(' + buildHouseImageLink(each.fileUrl) +')'
              }}>
                <span>Slide 1</span>
              </div>
            </div>
          }
        )
      }
    </Slide>
  }

  render() {
    const filesData = this.props.house.filesData;
    return (

        <div>
          {
            (filesData.length === 0) &&
            <div className="alert alert-secondary">
              Esta propiedad no tiene una imágen establecida
            </div>
          }
          {
            (filesData.length > 0) &&
            <Slide {...properties}>
            {
              filesData.map((each, index) =>
                {
                  return <div className="each-slide" key={index}>
                    <div style={{
                      'backgroundImage': 'url(' + buildHouseImageLink(each.fileUrl) +')'
                    }}>
                      <span>Slide 1</span>
                    </div>
                  </div>
                }
              )
            }
          </Slide>

          }


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
