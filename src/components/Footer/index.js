import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logoFoot from './logo_foot.png';

class Footer extends Component {
  render() {
      return (
        <footer className="tucasa-footer">
          <div className="container">
            <div className="row">
              <div className="col-4">
                <img src={logoFoot}  alt="" />
                <div className="footer-content">
                  This is the perfect four bedroom family home on an idyllic block, in one of Chicagos nicest suburbs.
                </div>
                <div className="foot-social-links">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <Link to={"/"}>
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to={"/"}>
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to={"/"}>
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-4">
                <span className="footer-title">Useful Links</span>
                <div className="footer-content">
                  <ul className="list-unstyled">
                    <li>
                      <Link to={"/"}>Inicio</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Destacados</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Blog</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Avisos oportunos</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-4">
                <span className="footer-title">Twitter Feed</span>
                <div className="footer-content">
                @TrxDoe RT @envato: One subscription, 5000+ assets & unlimited downloads; Elements is out of beta!
                </div>
              </div>
            </div>
          </div>
        </footer>
      );
    }
}

export default Footer;
