import React, { Component } from 'react';

class ContactDetails extends Component {

  render() {
      return (
        <div>
          <div className="house-section">
            <h4>Contacto</h4>
            <div className="form-horizontal contact-data">
              <div className="form-group">
                <label className="col-sm-4 control-label">Nombre:</label>
                <div className="col-sm-8">
                  <p className="form-control-static">
                    Luis Gomez Cruz
                  </p>
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-4 control-label">Teléfono:</label>
                <div className="col-sm-8">
                  <p className="form-control-static">
                    <a href="#fb" class="home-link">
                      55-23-22-03-85
                    </a>
                  </p>
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-4 control-label">Email:</label>
                <div className="col-sm-8">
                  <p className="form-control-static">
                    <a href="#fb" class="home-link">
                      luis@mail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-4 control-label">Facebook:</label>
                <div className="col-sm-8">
                  <p className="form-control-static">
                    <a href="#fb" class="home-link">
                      www.facebook.com/luis
                    </a>
                  </p>
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-4 control-label">Sitio web:</label>
                <div className="col-sm-8">
                  <p className="form-control-static">
                  <a href="#fb" class="home-link">
                    www.casasluis.com
                  </a>
                  </p>
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
