import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux';


class ContactDetails extends Component {

  render() {
      const house = this.props.house;
      return (
        <div>
          <div className="house-sectio">
            <h4>Contacto</h4>
            <div className="contact-list">
              <div className="row">
                <div className="col-md-5 field-title">
                  Nombre:
                </div>
                <div className="col-md-7">
                  {house.contact.name}
                </div>
              </div>
              <div className="row">
                <div className="col-md-5 field-title">
                  Teléfono:
                </div>
                <div className="col-md-7">
                  <a href="#email">
                    {house.contact.phone}
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="col-md-5 field-title">
                  Email:
                </div>
                <div className="col-md-7">
                  <a href="#email">
                    {house.contact.mail}
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="col-md-5 field-title">
                  Facebook:
                </div>
                <div className="col-md-7">
                  <a href="#email">
                    {house.contact.facebook}
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="col-md-5 field-title">
                  Sitio web:
                </div>
                <div className="col-md-7">
                  <a href="#email">
                    {house.contact.website}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="house-actions">
            <a href="#Contactar" className="btn btn-primary coco-color">
              <i className="fa fa-phone" aria-hidden="true"></i>
              Llamar
            </a>
          </div>
        </div>
      );
    }
}

function mapStateToProps(state) {
	const { house } = state;
  return { house };
}

export default connect(mapStateToProps)(ContactDetails);
