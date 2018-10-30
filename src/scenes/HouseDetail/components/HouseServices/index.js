import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux';

class HouseServices extends Component {

  renderServiceitem (service, i){
    let classService = ""
    switch (service) {
      case "Internet":
        classService = "fa-wifi";
        break;
      case "Telefono":
        classService = "fa-phone";
        break;
      case "Cocina":
        classService = "fa-cutlery";
        break;
      case "Jardin":
        classService = "fa-paw";
        break;
      case "Mascotas":
        classService = "fa-paw";
        break;
      case "SeguridadPrivada":
        classService = "fa-taxi";
        break;
    }

    return (
      <div className="col-md-4" key={i}>
        <div className="service-item">
          <i className={'fa ' + classService} aria-hidden="true"></i>
          {service}
        </div>
      </div>);
  }

  render() {
      const services = this.props.house.services;
      const thisObj = this;
      return (
        <div className="house-details">
          <h4>Servicios</h4>
          <div className="services-list">
            <div className="row">
            {services.map(function(service, i){
               return thisObj.renderServiceitem(service, i);
             })}
            </div>
          </div>
        </div>
      );
    }
}
function mapStateToProps(state) {
	const { house } = state;
  return { house };
}

export default connect(mapStateToProps)(HouseServices);
