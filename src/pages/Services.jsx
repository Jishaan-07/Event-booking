// pages/Services.jsx
import React from 'react';
import serviceLanding from '../assets/serviceLanding.jpg';
import who from '../assets/who.jpg';
import what from '../assets/what.jpg';
import line from '../assets/line.png';
import { Button } from '@mui/material';
import { Card } from 'react-bootstrap';
import Header from '../components/Header'

const Services = () => {
  return (
    <>
<Header/>
      <div style={{ position: 'relative', textAlign: 'center', color: 'white' }}>
        <img style={{ width: '100%', height: '100vh' }} src={serviceLanding} alt="" />
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: '2',
        }}>
          <h1 style={{
            fontFamily: '"Anta", serif',
            fontWeight: '700',
            fontSize: '5rem',
            letterSpacing: '0.05em',
            color: '#f8f9fa',
            textAlign: 'center',
            opacity: 0.9,
            marginBottom: '10px',
          }} className='text-dark'>
            <span style={{ fontSize: '7rem' }} className='text-primary fw-bolder'>O</span>ur Services
          </h1>
          <h1 style={{
            fontFamily: '"Anta", serif',
            fontWeight: '700',
            fontSize: '2.5rem',
            letterSpacing: '0.05em',
            color: '#f8f9fa',
            textAlign: 'center',
            opacity: 0.9,
            marginTop: '10px',
          }} className='text-dark'>
            Book, Manage, Celebrate<br />All in <span style={{ fontSize: '4rem' }} className='text-primary fw-bolder'>O</span>ne Place.
          </h1>
          <Button className='p-3 px-4 mt-5 rounded-pill fs-5' variant="contained" style={{ backgroundColor: '#007bff', color: '#fff' }}>
            Learn more
          </Button>
          <div style={{ padding: '10px 30px' }} className="d-flex justify-content-around align-items-center mt-5 border rounded shadow bg-light text-dark fw-bolder ">
            <div className="text-dark mx-4">
              <h4 style={{ fontSize: '2.5rem' }} className='fw-bolder'>18<span className='text-primary'>+</span></h4>
              <p style={{ whiteSpace: 'nowrap' }}>years of experience</p>
            </div>
            <img className='mx-2' src={line} height={'100px'} alt="" />
            <div className="text-dark mx-4">
              <h4 style={{ fontSize: '2.5rem' }} className='fw-bolder'>1.5k<span className='text-primary'>+</span></h4>
              <p style={{ whiteSpace: 'nowrap' }}>clients countrywide</p>
            </div>
            <img className='mx-2' src={line} height={'100px'} alt="" />

            <div className="text-dark mx-4">
              <h4 style={{ fontSize: '2.5rem' }} className='fw-bolder'>20<span className='text-primary'>+</span></h4>
              <p style={{ whiteSpace: 'nowrap' }}>public projects</p>
            </div>
            <img className='mx-2' src={line} height={'100px'} alt="" />

            <div className="text-dark mx-4">
              <h4 style={{ fontSize: '2.5rem' }} className='fw-bolder'>30<span className='text-primary'>+</span></h4>
              <p style={{ whiteSpace: 'nowrap' }}>employees</p>
            </div>
            <img className='mx-2' src={line} height={'100px'} alt="" />

            <div className="text-dark mx-4">
              <h4 style={{ fontSize: '2.5rem' }} className='fw-bolder'>1000<span className='text-primary'>+</span></h4>
              <p style={{ whiteSpace: 'nowrap' }}>customers satisfied</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ paddingLeft: '100px' }} className="d-flex justify-content-cnter align-items-center  mt-5">
        <h1 className='text-dark' style={{
          fontFamily: '"Hubot Sans", serif',
          fontWeight: '500',
          fontSize: '3.5rem',
          textAlign: 'start',
          opacity: 0.9,
          marginBottom: '10px',
        }}>Level Up Your <span className='text-primary'>Event Planning Skills</span> <br />  with Our <span className='text-primary'>Comprehensive Guides</span> <br /> and <span className='text-primary' >Resources</span>.</h1>
      </div>
      <div className='ms-5 mt-3 ps-5'>
        <p style={{ textAlign: 'justify', fontFamily: '"Hubot Sans", serif' }}>At EVNIFY, our mission is to revolutionize the way you plan, promote, and enjoy events. <br /> Whether you're hosting a grand celebration, a professional conference, or an intimate gathering, <br /> we simplify every step of the process.</p>
      </div>
      <div className="d-flex justify-content-center align-items-center" style={{ paddingTop: '100px', minHeight: '100vh' }}>
        <div className="row container ">
          <div className="col-lg-6">
            <div className="border rounded shadow py-3 px-4">
              <div className="d-flex align-items-center">
                <i style={{ fontSize: '40px' }} className="fa-solid fa-people-group mx-2 text-primary"></i>
                <h3 style={{ fontFamily: '"Hubot Sans", serif' }} className="mx-3 fw-bolder">
                  <span className="text-primary">Who</span> We Are?
                </h3>
              </div>
              <p className="mt-3" style={{ textAlign: 'justify', fontFamily: '"Hubot Sans", serif' }}>
                At EVNIFY, we are dedicated to making event planning seamless and stress-free. From bookings to ticket management, we bring innovation and expertise to help you create unforgettable experiences effortlessly.
              </p>
            </div>

            <div className="border rounded shadow mt-4 py-3 px-4 ">
              <div className="d-flex align-items-center">
                <i style={{ fontSize: '40px' }} className="fa-solid fa-ticket mx-2 text-primary"></i>
                <h3 style={{ fontFamily: '"Hubot Sans", serif' }} className="mx-3 fw-bolder">
                  <span className="text-primary">What</span> We Do?
                </h3>
              </div>
              <p className="mt-3" style={{ textAlign: 'justify', fontFamily: '"Hubot Sans", serif' }}>
                We simplify event management with cutting-edge solutions for bookings, ticketing, and organization. Whether it's a grand celebration or a small gathering, we ensure every detail is flawlessly executed.
              </p>
            </div>

            <div className="border rounded shadow mt-4 py-3 px-4">
              <div className="d-flex align-items-center">
                <i style={{ fontSize: '40px' }} className="fa-solid fa-check mx-2 text-primary"></i>
                <h3 style={{ fontFamily: '"Hubot Sans", serif' }} className="mx-3 fw-bolder">
                  Our <span className="text-primary">Mission</span>
                </h3>
              </div>
              <p className="mt-3" style={{ textAlign: 'justify', fontFamily: '"Hubot Sans", serif' }}>
                Our mission is to redefine event planning by delivering seamless booking experiences and empowering everyone to create memorable events with ease and confidence.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="rounded" >
              <img className="img-fluid rounded" src={who} alt="Who We Are" style={{ width: '500px', height: 'auto' }} />
            </div>
            <div className="rounded" >
              <img className="img-fluid rounded  mt-3" src={what} alt="Who We Are" style={{ width: '500px', height: 'auto' }} />
            </div>


          </div>
        </div>
      </div>
      <div className="text-center text-dark mt-5">
        <h1 style={{
          fontFamily: '"Hubot Sans", serif',
          fontWeight: '500',
          fontSize: '3.5rem',
          opacity: 0.9,
          marginBottom: '10px',
        }} className='fw-bolder'>Our <span className='text-primary'>Services</span></h1>
      </div>
      <p className='text-center'>See the list of available sevices we provide!</p>


      <div className="d-flex flex-wrap justify-content-evenly align-items-center mt-5">
        <Card className='shadow' style={{ width: '20rem' }}>
          <Card.Body>
            <Card.Title className='text-primary fw-bolder' style={{ fontSize: '1.3rem' }}>
              <i className="fa-regular fs-2 fa-star"></i> VIP Event Management
            </Card.Title>
            <Card.Text className='py-3'>
              Exclusive management for high-profile events, including red carpet treatment, luxury amenities, and personalized guest experiences.
            </Card.Text>
            <div className='d-flex justify-content-center'>
              <Button className='rounded-pill' variant="contained">More info</Button>
            </div>
          </Card.Body>
        </Card>


        <Card className='shadow' style={{ width: '20rem' }}>
          <Card.Body>
            <Card.Title className='text-primary fw-bolder' style={{ fontSize: '1.1rem' }}>
            <i class="fa-solid fs-2 fa-helmet-safety"></i> On-Site Event Coordination
            </Card.Title>
            <Card.Text className='py-3'>
            Dedicated event managers who oversee every detail on-site to ensure your event runs smoothly and professionally.            </Card.Text>
            <div className='d-flex justify-content-center'>
              <Button className='rounded-pill' variant="contained">More info</Button>
            </div>
          </Card.Body>
        </Card>

        <Card className='shadow' style={{ width: '20rem' }}>
          <Card.Body>
            <Card.Title className='text-primary fw-bolder' style={{ fontSize: '1.3rem' }}>
            <i class="fa-solid fs-2 fa-video"></i> Virtual Event Services
            </Card.Title>
            <Card.Text className='py-3'>
            Host virtual conferences, webinars, and meetings with our secure, easy-to-use platform. Stream, record, and engage participants from around the world.            </Card.Text>
            <div className='d-flex justify-content-center'>
              <Button className='rounded-pill' variant="contained">More info</Button>
            </div>
          </Card.Body>
        </Card>



      </div>


      <div className="d-flex flex-wrap justify-content-evenly align-items-center mt-5">
        <Card className='shadow' style={{ width: '20rem' }}>
          <Card.Body>
            <Card.Title className='text-primary fw-bolder' style={{ fontSize: '1.1rem' }}>
            <i class="fa-solid fs-2 fa-paint-roller"></i> Customized Event Branding
            </Card.Title>
            <Card.Text className='py-3'>
            Create a unique identity for your event with personalized branding solutions, including custom logos, signage, and digital assets.            </Card.Text>
            <div className='d-flex justify-content-center'>
              <Button className='rounded-pill' variant="contained">More info</Button>
            </div>
          </Card.Body>
        </Card>


        <Card className='shadow' style={{ width: '20rem' }}>
          <Card.Body>
            <Card.Title className='text-primary fw-bolder' style={{ fontSize: '1.1rem' }}>
            <i class="fa-solid fs-2 fa-utensils"></i> Catering Services
            </Card.Title>
            <Card.Text className='py-3'>
            Provide top-notch catering options with menu customization, from gourmet meals to themed buffets and cocktail receptions.         </Card.Text>
            <div className='d-flex justify-content-center'>
              <Button className='rounded-pill' variant="contained">More info</Button>
            </div>
          </Card.Body>
        </Card>

        <Card className='shadow' style={{ width: '20rem' }}>
          <Card.Body>
            <Card.Title className='text-primary fw-bolder' style={{ fontSize: '1.3rem' }}>
            <i class="fa-solid fs-2 fa-music"></i> Entertainment and Performances
            </Card.Title>
            <Card.Text className='py-3'>
            Book live bands, DJs, entertainers, and performers to enhance your event’s ambiance and make it unforgettable.          </Card.Text>
            <div className='d-flex justify-content-center'>
              <Button className='rounded-pill' variant="contained">More info</Button>
            </div>
          </Card.Body>
        </Card>



      </div>

    </>
  );
};

export default Services;
