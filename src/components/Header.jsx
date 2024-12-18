import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.png'
const Header = () => {
  return (
    <Navbar expand="lg" style={{ zIndex: 1000, position: 'fixed',top:"0px", width: '100%', backgroundColor: '#f8f9fa', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderBottom: '1px solid #ddd', }}  >
      <Container>
        <Navbar.Brand style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
          <Link to="/" style={{
            textDecoration: 'none', color: '#007bff',
            display: 'flex',
            alignItems: 'center',
          }}>
           
           <img src={logo} alt="" />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto text-center" style={{ alignItems: 'center' }}>

            <Nav.Link
              as={Link}
              to="/services"
              style={{
                color: '#343a40',
                fontWeight: '500',
                margin: '0 10px',
              }}
            >
              Services
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/all-events"
              style={{
                color: '#343a40',
                fontWeight: '500',
                margin: '0 10px',
              }}
            >
              All Events
            </Nav.Link>

            
            <Nav.Link
              as={Link}
              to="/bookings"
              style={{
                color: '#343a40',
                fontWeight: '500',
                margin: '0 10px',
              }}
            >
              Bookings
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact-us"
              style={{
                color: '#343a40',
                fontWeight: '500',
                margin: '0 10px',
              }}
            >
              Contact Us
            </Nav.Link>
          </Nav>
          <button
            style={{
              border: '1px solid #007bff',
              backgroundColor: '#007bff',
              color: '#fff',
              fontWeight: '500',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '6px 12px',
              borderRadius: '5px',
              fontSize: '1rem',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
            className="btn"
          >
            Create Account
             
          </button>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
