import React from 'react'
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';



import { Outlet, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


   function MyNavbar()  {
    return (
      <div>
      
        <Navbar expand="lg" variant="dark" className="navbar-fixed">
          <Container>
            <Navbar.Brand href="/">
              <img
                src="/src/images/logoA.png"
                alt="Logo"
                className="navbar-logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/About">About</Nav.Link>
                <Nav.Link as={Link} to="/Destination">Destination</Nav.Link>
                <Nav.Link as={Link} to="/Hotel">Hotel</Nav.Link>
                <Nav.Link as={Link} to="/Blog">Blog</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
  
        <div className="content">
          <Container>
            <Outlet />
          </Container>
        </div>
      </div>
    );
  }
  
  export default MyNavbar;