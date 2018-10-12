import React, { Component } from 'react';

import { buildHouseImage } from 'services/utilities/ImageHelper';

class HouseItem extends Component {

  renderHouseImage(){
    let houseFiles = this.props.house.filesData;
    let houseImg = houseFiles.length > 0 ? houseFiles[0].fileUrl : '';
    return (buildHouseImage(houseImg));
  }

  render() {
      return (
        <div className="col-md-6">
            <article className="house-item">
              <a href="#showDetails">
                <div className="cropped-image house-image-content">
                  {this.renderHouseImage()}
                </div>
              </a>
              <div className="item-details">
                <a href="#showDetails">
                  <h5>
                      <span className="house-price">$ {this.props.house.price}</span>
                      <span>{this.props.house.title}</span>
                  </h5>
                  <div className="item-address text-muted">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <span>{this.props.house.address.address}</span>
                  </div>
                  <div className="item-metrics text-muted">
                    <span className="item-loves">
                      <i className="fa fa-heart" aria-hidden="true"></i>
                      <span >0</span>
                    </span>
                    <span className="item-views">
                      <i className="fa fa-eye" aria-hidden="true"></i>
                      <span >0</span>
                    </span>
                  </div>
                </a>
              </div>
            </article>
          </div>
      );
    }
}

export default HouseItem;
