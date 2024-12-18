import React from "react";
import SideNavbar from "../components/SideNavbar";
import logo from '../assets/Logo.png';
import { Container, Navbar, Row, Col, Form, Button, Card } from "react-bootstrap";
import uploadImg from '../assets/uploadImg.jpg';

const AddEvent = () => {
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
      <div className="d-flex">
        {/* Sidebar */}
        <SideNavbar />

        {/* Main Content */}
        <Container className="p-4">
          <h3 className="mb-4 fw-bold">Add Event</h3>

          <Card className="p-4 shadow-sm">
            <Row>
              {/* Upload Event Image */}
              <Col md={3} className="d-flex mx-5 flex-column align-items-center">
                <label>
                  <input type="file" style={{ display: 'none' }} />
                  <img width={'200px'} src={uploadImg} alt="" />
                </label>
              </Col>

              {/* Event Form */}
              <Col md={9}>
                <Form>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Event Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter event name" />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Category</Form.Label>
                        <Form.Select>
                          <option>Concert</option>
                          <option>Workshop</option>
                          <option>Conference</option>
                          <option>Sports</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Location</Form.Label>
                        <Form.Control type="text" placeholder="Enter location" />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="date" />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="number" placeholder="Enter price" />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Seats Available</Form.Label>
                        <Form.Control type="number" placeholder="Number of seats" />
                      </Form.Group>
                    </Col>

                    <Col md={12}>
                      <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          placeholder="Write about the event"
                        />
                      </Form.Group>
                    </Col>

                    <Col className="d-flex justify-content-between" md={12}>
                      <Form.Group className="mb-3">
                        <Form.Label>Status</Form.Label>
                        <div>
                          <Form.Check
                            inline
                            type="radio"
                            name="status"
                            id="availableStatus"
                            label="Available"
                          />
                          <Form.Check
                            inline
                            type="radio"
                            name="status"
                            id="unavailableStatus"
                            label="Unavailable"
                          />
                        </div>
                      </Form.Group>



                      <Form.Group className="mb-3">
                        <Form.Label>Event Type</Form.Label>
                        <div>
                          <Form.Check
                            inline
                            type="radio"
                            name="eventType"
                            id="upcomingEvents"
                            label="Upcoming Events"
                          />
                          <Form.Check
                            inline
                            type="radio"
                            name="eventType"
                            id="popularVenues"
                            label="Popular Venues"
                          />
                        </div>
                      </Form.Group>

                    </Col>
                  </Row>
                  <Button variant="primary" className="mt-2">
                    Submit
                  </Button>
                </Form>
              </Col>
            </Row>
          </Card>
        </Container>
      </div>
    </>
  );
};

export default AddEvent;
