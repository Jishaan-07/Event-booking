import React from 'react';
import eventsImg from '../assets/events.png';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const EventView = () => {
  return (
    <>
      <Header />
      <div style={{ paddingTop: '100px', position: 'relative', overflow: 'hidden' }} className="container mt-5">
      <h1 style={{
          fontFamily: '"Hubot Sans", serif',
          fontWeight: '500',
          fontSize: '3.5rem',
          opacity: 0.9,
          marginBottom: '10px',
        }} className='fw-bolder'>E<span className='text-primary'>vents</span></h1>    
            <img src={eventsImg} alt="Event" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
        <div style={{ position: 'absolute', bottom: '20px', left: '20px', color: '#fff' }}>
          <h3 style={{
            fontFamily: '"Hubot Sans", serif',
            fontWeight: '700',
            fontSize: '2rem',
            marginBottom: '5px',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
          }} className='fw-bolder'>Taylor Swift</h3>
          <p className='fw-bolder'>Concert</p>
        </div>
      </div>
      <div  className="row  container mt-5" 
  style={{ marginLeft: 'auto', marginRight: 'auto', padding: '0 15px' }}>
    <h2 style={{
          fontFamily: '"Hubot Sans", serif',
          fontWeight: '500',
          fontSize: '2.5rem',
          opacity: 0.9,
          marginBottom: '10px',
        }} className='fw-bolder text-center mb-5'><span className='text-primary fw-bolder'>Tickets</span> Available</h2>
  <div className="col-lg-6 shadow d-flex justify-content-center align-items-center">
    <div className="d-flex align-items-center gap-4 flex-wrap">
    <div 
  className="d-flex align-items-center gap-4 flex-wrap"
  style={{
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap', // Wrap content on smaller screens
  }}
>
<div 
  className="d-flex align-items-stretch gap-0 flex-wrap"
  style={{
    justifyContent: 'space-between',
    flexWrap: 'wrap', // Ensures wrapping on smaller screens
  }}
>
  {/* Date Box */}
  <div 
    style={{ 
      width: '100px', 
      minWidth: '100px', 
      backgroundColor: 'rgba(0, 123, 255, 1)', 
      height: '250px', // Ensure consistent height
    }} 
    className="text-center p-3 rounded shadow-sm d-flex flex-column justify-content-center align-items-center"
  >
    <p className="text-light fw-bolder mb-1" style={{ fontSize: '1.5rem' }}>25</p>
    <p className="text-light fw-bolder mb-1" style={{ fontSize: '1.2rem' }}>July</p>
    <p className="text-light fw-bolder" style={{ fontSize: '1rem' }}>2025</p>
  </div>
  
  {/* Event Details */}
  <div 
    style={{ 
      flex: '1', 
      minWidth: '450px', 
      maxWidth: '600px', 
      backgroundColor: 'rgba(150, 184, 250, 1)', 
      height: '250px', // Same height as Date Box
    }} 
    className="p-3 text-light text-shadow fw-bolder rounded shadow-sm d-flex flex-column justify-content-center"
  >
    <h5 className="fw-bolder mb-3">Taylor Swift</h5>
    <p className="mb-2">
      <i className="fa-solid fa-ticket me-2"></i> 
      <strong>Status:</strong> Available
    </p>
    <p className="mb-2">
      <i className="fa-solid fa-sack-dollar me-2"></i> 
      <strong>Price:</strong> $200
    </p>
    <p className="mb-2">
      <i className="fa-solid fa-calendar-days me-2"></i> 
      <strong>Date & Time:</strong> Fri 11:00 AM
    </p>
    <p className="mb-0">
      <i className="fa-solid fa-location-dot me-2"></i> 
      <strong>Location:</strong> New York
    </p>
    <Link to={'/bookings'}>
      <button className="mt-3 btn btn-primary">Add To Bookings</button>
    </Link>
  </div>
</div>

</div>

    </div>
  </div>

  {/* Optional Empty Column for Layout Adjustments */}
  <div className="col-lg-6 shadow d-flex justify-content-center align-items-center">
    <div className="d-flex align-items-center gap-4 flex-wrap">
    <div 
  className="d-flex align-items-center gap-4 flex-wrap"
  style={{
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap', // Wrap content on smaller screens
  }}
>
<div 
  className="d-flex align-items-stretch gap-0 flex-wrap"
  style={{
    justifyContent: 'space-between',
    flexWrap: 'wrap', // Ensures wrapping on smaller screens
  }}
>
  {/* Date Box */}
  <div 
    style={{ 
      width: '100px', 
      minWidth: '100px', 
      backgroundColor: 'rgba(0, 123, 255, 1)', 
      height: '250px', // Ensure consistent height
    }} 
    className="text-center p-3 rounded shadow-sm d-flex flex-column justify-content-center align-items-center"
  >
    <p className="text-light fw-bolder mb-1" style={{ fontSize: '1.5rem' }}>25</p>
    <p className="text-light fw-bolder mb-1" style={{ fontSize: '1.2rem' }}>July</p>
    <p className="text-light fw-bolder" style={{ fontSize: '1rem' }}>2025</p>
  </div>
  
  {/* Event Details */}
  <div 
    style={{ 
      flex: '1', 
      minWidth: '450px', 
      maxWidth: '600px', 
      backgroundColor: 'rgba(150, 184, 250, 1)', 
      height: '250px', // Same height as Date Box
    }} 
    className="p-3 text-light text-shadow fw-bolder rounded shadow-sm d-flex flex-column justify-content-center"
  >
    <h5 className="fw-bolder mb-3">Taylor Swift</h5>
    <p className="mb-2">
      <i className="fa-solid fa-ticket me-2"></i> 
      <strong>Status:</strong> Available
    </p>
    <p className="mb-2">
      <i className="fa-solid fa-sack-dollar me-2"></i> 
      <strong>Price:</strong> $200
    </p>
    <p className="mb-2">
      <i className="fa-solid fa-calendar-days me-2"></i> 
      <strong>Date & Time:</strong> Fri 11:00 AM
    </p>
    <p className="mb-0">
      <i className="fa-solid fa-location-dot me-2"></i> 
      <strong>Location:</strong> New York
    </p>
    <Link to={'/bookings'}>
      <button className="mt-3 btn btn-primary">Add To Bookings</button>
    </Link>
  </div>
</div>

</div>

    </div>
  </div>
</div>
<div  className="row container mt-5" 
  style={{ marginLeft: 'auto', marginRight: 'auto', padding: '0 15px' }}
>
  <div className="col-lg-6 shadow d-flex justify-content-center align-items-center">
    <div className="d-flex align-items-center gap-4 flex-wrap">
    <div 
  className="d-flex align-items-center gap-4 flex-wrap"
  style={{
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap', // Wrap content on smaller screens
  }}
>
<div 
  className="d-flex align-items-stretch gap-0 flex-wrap"
  style={{
    justifyContent: 'space-between',
    flexWrap: 'wrap', // Ensures wrapping on smaller screens
  }}
>
  {/* Date Box */}
  <div 
    style={{ 
      width: '100px', 
      minWidth: '100px', 
      backgroundColor: 'rgba(0, 123, 255, 1)', 
      height: '250px', // Ensure consistent height
    }} 
    className="text-center p-3 rounded shadow-sm d-flex flex-column justify-content-center align-items-center"
  >
    <p className="text-light fw-bolder mb-1" style={{ fontSize: '1.5rem' }}>25</p>
    <p className="text-light fw-bolder mb-1" style={{ fontSize: '1.2rem' }}>July</p>
    <p className="text-light fw-bolder" style={{ fontSize: '1rem' }}>2025</p>
  </div>
  
  {/* Event Details */}
  <div 
    style={{ 
      flex: '1', 
      minWidth: '450px', 
      maxWidth: '600px', 
      backgroundColor: 'rgba(150, 184, 250, 1)', 
      height: '250px', // Same height as Date Box
    }} 
    className="p-3 text-light text-shadow fw-bolder rounded shadow-sm d-flex flex-column justify-content-center"
  >
    <h5 className="fw-bolder mb-3">Taylor Swift</h5>
    <p className="mb-2">
      <i className="fa-solid fa-ticket me-2"></i> 
      <strong>Status:</strong> Available
    </p>
    <p className="mb-2">
      <i className="fa-solid fa-sack-dollar me-2"></i> 
      <strong>Price:</strong> $200
    </p>
    <p className="mb-2">
      <i className="fa-solid fa-calendar-days me-2"></i> 
      <strong>Date & Time:</strong> Fri 11:00 AM
    </p>
    <p className="mb-0">
      <i className="fa-solid fa-location-dot me-2"></i> 
      <strong>Location:</strong> New York
    </p>
    <Link to={'/bookings'}>
      <button className="mt-3 btn btn-primary">Add To Bookings</button>
    </Link>
  </div>
</div>

</div>

    </div>
  </div>

  {/* Optional Empty Column for Layout Adjustments */}
  <div className="col-lg-6 shadow d-flex justify-content-center align-items-center">
    <div className="d-flex align-items-center gap-4 flex-wrap">
    <div 
  className="d-flex align-items-center gap-4 flex-wrap"
  style={{
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap', // Wrap content on smaller screens
  }}
>
<div 
  className="d-flex align-items-stretch gap-0 flex-wrap"
  style={{
    justifyContent: 'space-between',
    flexWrap: 'wrap', // Ensures wrapping on smaller screens
  }}
>
  {/* Date Box */}
  <div 
    style={{ 
      width: '100px', 
      minWidth: '100px', 
      backgroundColor: 'rgba(0, 123, 255, 1)', 
      height: '250px', // Ensure consistent height
    }} 
    className="text-center p-3 rounded shadow-sm d-flex flex-column justify-content-center align-items-center"
  >
    <p className="text-light fw-bolder mb-1" style={{ fontSize: '1.5rem' }}>25</p>
    <p className="text-light fw-bolder mb-1" style={{ fontSize: '1.2rem' }}>July</p>
    <p className="text-light fw-bolder" style={{ fontSize: '1rem' }}>2025</p>
  </div>
  
  {/* Event Details */}
  <div 
    style={{ 
      flex: '1', 
      minWidth: '450px', 
      maxWidth: '600px', 
      backgroundColor: 'rgba(150, 184, 250, 1)', 
      height: '250px', // Same height as Date Box
    }} 
    className="p-3 text-light text-shadow fw-bolder rounded shadow-sm d-flex flex-column justify-content-center"
  >
    <h5 className="fw-bolder mb-3">Taylor Swift</h5>
    <p className="mb-2">
      <i className="fa-solid fa-ticket me-2"></i> 
      <strong>Status:</strong> Available
    </p>
    <p className="mb-2">
      <i className="fa-solid fa-sack-dollar me-2"></i> 
      <strong>Price:</strong> $200
    </p>
    <p className="mb-2">
      <i className="fa-solid fa-calendar-days me-2"></i> 
      <strong>Date & Time:</strong> Fri 11:00 AM
    </p>
    <p className="mb-0">
      <i className="fa-solid fa-location-dot me-2"></i> 
      <strong>Location:</strong> New York
    </p>
    <Link to={'/bookings'}>
      <button className="mt-3 btn btn-primary">Add To Bookings</button>
    </Link>
  </div>
</div>

</div>

    </div>
  </div>
</div>
    </>
  );
};

export default EventView;
