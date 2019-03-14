import React, { Component } from 'react';
import { Navbar, Form, FormControl, Button, NavDropdown, Nav  } from 'react-bootstrap';
import brandlogo from './logo-house.png';

class Header extends Component {
  render() {
      console.log('HEADER', this.props.customClass);
      return (
        <header className={this.props.customClass}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <Navbar bg="light" expand="lg">
                  <Navbar.Brand href="#home">
                    {
                      !this.props.customClass &&
                        <img src={brandlogo}  alt="" />
                    }
                    {
                      this.props.customClass === "landing" &&
                      <i className="fa fa-home" aria-hidden="true"></i>
                    }
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                      <Nav.Link href="#home">Inicio</Nav.Link>
                      <Nav.Link href="#link">Destacados</Nav.Link>
                      <Nav.Link href="#link">Blog</Nav.Link>
                      <Nav.Link href="#link">Avisos oportunos</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
              </div>
            </div>
          </div>
        </header>
      );
    }
}

export default Header;
