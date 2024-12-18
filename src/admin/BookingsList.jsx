import React from 'react';
import logo from '../assets/Logo.png';
import SideNavbar from '../components/SideNavbar';
import { Container, Navbar, Table } from 'react-bootstrap';

const BookingsList = () => {
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

        {/* Main Content */}
        <div className="container p-5">
          <h1
            style={{
              fontFamily: '"Hubot Sans", serif',
              fontSize: '2rem',
              opacity: 0.9,
              marginBottom: '20px',
            }}
            className="fw-bolder"
          >
            Bookings
          </h1>

           <Table striped bordered hover responsive="md" className="text-center">
            <thead className="table-primary">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Date</th>
                <th>Event</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Jishan</td>
                <td>Male</td>
                <td>29/08/2003</td>
                <td>Justin Bieber</td>
                <td>$500</td>
                <td>
                  <button className="btn btn-danger btn-sm me-2">Cancel</button>
                  <button className="btn btn-success btn-sm">Confirm</button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Alex</td>
                <td>Female</td>
                <td>15/09/2023</td>
                <td>Coldplay Concert</td>
                <td>$300</td>
                <td>
                  <button className="btn btn-danger btn-sm me-2">Cancel</button>
                  <button className="btn btn-success btn-sm">Confirm</button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default BookingsList;
