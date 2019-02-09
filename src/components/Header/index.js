import React, { Component } from 'react';
import { Navbar, Form, FormControl, Button, NavDropdown, Nav  } from 'react-bootstrap';
import brandlogo from './taza-chai.png';

class Header extends Component {
  render() {
      return (
        <header>            
            <Navbar bg="light" expand="lg">
              <Navbar.Brand href="#home">
                <img src={brandlogo}  alt="" />
                TuCasaEnJilo.com
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#home">Inicio</Nav.Link>
                  <Nav.Link href="#link">Salones de fiesta</Nav.Link>
                  <Nav.Link href="#link">Locales</Nav.Link>
                  <Nav.Link href="#link">Terrenos</Nav.Link>
                </Nav>
                <Form inline>
                  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Navbar>
        </header>
      );
    }
}

export default Header;
