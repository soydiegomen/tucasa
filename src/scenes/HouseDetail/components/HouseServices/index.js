import React, { Component } from 'react';

class HouseServices extends Component {

  render() {
      return (
        <div className="house-details">
          <h4>Servicios</h4>
          <div className="services-list">
            <div className="row">
              <div className="col-md-4">
                <div className="service-item">
                  <i className="fa fa-wifi" aria-hidden="true"></i>
                  Internet
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-item">
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  Linea telefónica
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-item">
                  <i className="fa fa-cutlery" aria-hidden="true"></i>
                  Cocina
                </div>
              </div>
              <div className="col-md-4">
                <div cclassNamelass="service-item">
                  <i className="fa fa-paw" aria-hidden="true"></i>
                  Admite mascotas
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-item">
                  <i className="fa fa-child" aria-hidden="true"></i>
                  Área de juegos infantiles
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-item">
                  <i className="fa fa-taxi" aria-hidden="true"></i>
                  Seguridad privada
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
}

export default HouseServices;
