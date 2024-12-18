import React from 'react'
import logo from '../assets/Logo.png';
import SideNavbar from '../components/SideNavbar';
import { Container, Navbar, Table } from 'react-bootstrap';
import EventCard from '../components/EventCard';

const EventsLists = () => {
  return (
    <> 
              {/* Top Navbar */}
      <Navbar expand="lg" className="bg-body-tertiary shadow">
        <Container>
          <Navbar.Brand href="#">
            <img src={logo} alt="Logo" style={{ height: '50px' }} />
          </Navbar.Brand>
        </Container>
      </Navbar>

      {/* Content Section */}
      <div className="d-flex">
        {/* Sidebar */}
        <SideNavbar />

        <div className="p-5 container">
        <h1
            style={{
              fontFamily: '"Hubot Sans", serif',
              fontSize: '2rem',
              opacity: 0.9,
              marginBottom: '20px',
            }}
            className="fw-bolder"
          >
        Events Lists
          </h1>
            <EventCard/>
        </div>
        </div>
    </>
  )
}

export default EventsLists