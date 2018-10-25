import React, { Component } from 'react';

class ContactDetails extends Component {

  render() {
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
                  Luis Gomez Cruz
                </div>
              </div>
              <div className="row">
                <div className="col-md-5 field-title">
                  Teléfono:
                </div>
                <div className="col-md-7">
                  55-23-22-03-85
                </div>
              </div>
              <div className="row">
                <div className="col-md-5 field-title">
                  Email:
                </div>
                <div className="col-md-7">
                  <a href="#email">
                    luis@mail.com
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="col-md-5 field-title">
                  Facebook:
                </div>
                <div className="col-md-7">
                  <a href="#email">
                    www.facebook.com/luis
                  </a>
                </div>
              </div>
              <div className="row">
                <div className="col-md-5 field-title">
                  Sitio web:
                </div>
                <div className="col-md-7">
                  <a href="#email">
                    www.casasluis.com
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

export default ContactDetails;
