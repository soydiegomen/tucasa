import React, { Component } from 'react';

class HouseItem extends Component {

  buildHouseImage(){
    return (<img alt="casa uno" className="img-responsive portrait"
    src="http://housefiles.loc:8888/uploads/2018/3/13/min-1521001117851-seis.jpg" />);
  }

  render() {
      return (
        <div className="col-md-6">
            <article className="house-item">
              <a href="#showDetails">
                <div className="cropped-image house-image-content">
                  {this.buildHouseImage()}
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


/*
    function buildImageURL(){

      src={'http://housefiles.loc:8888/' + picture.photoURL}
      src="http://housefiles.loc:8888/uploads/2018/3/13/min-1521001117851-seis.jpg" />

      //return 'http://housefiles.loc:8888/uploads/2018/3/13/min-1521001117851-seis.jpg';
      return <h1>
    }*/
}

export default HouseItem;
