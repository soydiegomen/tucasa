import React, { Component } from 'react';
import { Navbar, Form, FormControl, Button, NavDropdown, Nav  } from 'react-bootstrap';
import brandlogo from './logo-house.png';

class Header extends Component {
  render() {
      return (
        <header>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <Navbar bg="light" expand="lg">
                  <Navbar.Brand href="#home">
                    <img src={brandlogo}  alt="" />
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                      <Nav.Link href="#home">Inicio</Nav.Link>
                      <Nav.Link href="#link">Destacados</Nav.Link>
                      <Nav.Link href="#link">Blog</Nav.Link>
                      <Nav.Link href="#link">Avisos oportunos</Nav.Link>
                    </Nav>
                    <Form inline>
                      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                      <Button variant="outline-success">Search</Button>
                    </Form>
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
