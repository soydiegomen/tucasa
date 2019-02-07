import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
              { house.contact.phone &&
                <div className="row">
                  <div className="col-md-5 field-title">
                    Teléfono:
                  </div>
                  <div className="col-md-7">
                    <Link to={`tel:${house.contact.phone}`} target="_blank">
                      {house.contact.phone}
                    </Link>
                  </div>
                </div>
              }
              { house.contact.mail &&
                <div className="row">
                  <div className="col-md-5 field-title">
                    Email:
                  </div>
                  <div className="col-md-7">
                    <Link to={`mailto:${house.contact.mail}`} target="_blank">
                      {house.contact.mail}
                    </Link>
                  </div>
                </div>
              }
              { house.contact.facebook &&
                <div className="row">
                  <div className="col-md-5 field-title">
                    Facebook:
                  </div>
                  <div className="col-md-7">
                    <Link to={house.contact.facebook} target="_blank">
                      {house.contact.facebook}
                    </Link>
                  </div>
                </div>
              }
              { house.contact.website &&
              <div className="row">
                <div className="col-md-5 field-title">
                  Sitio web:
                </div>
                <div className="col-md-7">
                    <Link to={`${house.contact.website}`} target="_blank">
                      {house.contact.website}
                    </Link>
                </div>
              </div>
              }
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
