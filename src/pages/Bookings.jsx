import React from 'react'
import Header from '../components/Header'
import taylor from '../assets/taylor.png';

const Bookings = () => {
  return (
    <>
      <Header />
      <div style={{ paddingTop: '100px' }} className="container mt-5">
        <h1
          style={{
            fontFamily: '"Hubot Sans", serif',
            fontWeight: '500',
            fontSize: '3.5rem',
            opacity: 0.9,
            marginBottom: '10px',
          }}
          className="fw-bolder"
        >
          <span style={{ fontSize: '70px' }} className="fw-bolder text-primary">
            My
          </span>{' '}
          Bookings
        </h1>

        {/* Booking Box */}
        <div className="d-flex justify-content-start container align-items-center mt-3">
          {/* Image */}
          <img
            src={taylor}
            style={{
              width: '200px',
              objectFit: 'cover',
              marginRight: '15px',
            }}
            className="rounded shadow"
            alt="Taylor Swift"
          />

          {/* Details Box */}
          <div
            style={{
              flex: '1',
              minWidth: '600px',
              maxWidth: '100%',
              backgroundColor: 'rgba(150, 184, 250, 1)',
              height: '150px', // Match image height
              padding: '15px',
              boxSizing: 'border-box',
            }}
            className="text-light text-shadow fw-bold rounded shadow-sm d-flex flex-column justify-content-between"
          >
            {/* Title */}
            <h5
              className="fw-bold text-light"
              style={{
                fontSize: '1rem',
                marginBottom: '8px',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
              }}
            >
              Taylor Swift
            </h5>
{/* Event Details and Buttons */}
<div className="d-flex justify-content-between align-items-center" style={{ fontSize: '0.85rem', lineHeight: '1.4' }}>
  {/* Event Details */}
  <div>
    <p className="mb-1">
      <i className="fa-solid fa-ticket me-2"></i>
      <strong>Status:</strong> Available
    </p>
    <p className="mb-1">
      <i className="fa-solid fa-sack-dollar me-2"></i>
      <strong>Price:</strong> $200
    </p>
    <p className="mb-1">
      <i className="fa-solid fa-calendar-days me-2"></i>
      <strong>Date & Time:</strong> Fri 11:00 AM
    </p>
    <p className="mb-0">
      <i className="fa-solid fa-location-dot me-2"></i>
      <strong>Location:</strong> New York
    </p>
  </div>

  {/* Buttons */}
  <div className="d-flex gap-2">
    <button
      className="btn btn-danger btn-sm"
      style={{ fontSize: '0.85rem', padding: '5px 10px' }}
    >
      Cancel Booking
    </button>
    <button
      className="btn btn-success btn-sm"
      style={{ fontSize: '0.85rem', padding: '5px 10px' }}
    >
      Pay Now
    </button>
  </div>
</div>

          </div>
        </div>
        <div className="d-flex justify-content-start container align-items-center mt-3">
          {/* Image */}
          <img
            src={taylor}
            style={{
              width: '200px',
              objectFit: 'cover',
              marginRight: '15px',
            }}
            className="rounded shadow"
            alt="Taylor Swift"
          />

          {/* Details Box */}
          <div
            style={{
              flex: '1',
              minWidth: '600px',
              maxWidth: '100%',
              backgroundColor: 'rgba(150, 184, 250, 1)',
              height: '150px', // Match image height
              padding: '15px',
              boxSizing: 'border-box',
            }}
            className="text-light text-shadow fw-bold rounded shadow-sm d-flex flex-column justify-content-between"
          >
            {/* Title */}
            <h5
              className="fw-bold text-light"
              style={{
                fontSize: '1rem',
                marginBottom: '8px',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
              }}
            >
              Taylor Swift
            </h5>
{/* Event Details and Buttons */}
<div className="d-flex justify-content-between align-items-center" style={{ fontSize: '0.85rem', lineHeight: '1.4' }}>
  {/* Event Details */}
  <div>
    <p className="mb-1">
      <i className="fa-solid fa-ticket me-2"></i>
      <strong>Status:</strong> Available
    </p>
    <p className="mb-1">
      <i className="fa-solid fa-sack-dollar me-2"></i>
      <strong>Price:</strong> $200
    </p>
    <p className="mb-1">
      <i className="fa-solid fa-calendar-days me-2"></i>
      <strong>Date & Time:</strong> Fri 11:00 AM
    </p>
    <p className="mb-0">
      <i className="fa-solid fa-location-dot me-2"></i>
      <strong>Location:</strong> New York
    </p>
  </div>

  {/* Buttons */}
  <div className="d-flex gap-2">
    <button
      className="btn btn-danger btn-sm"
      style={{ fontSize: '0.85rem', padding: '5px 10px' }}
    >
      Cancel Booking
    </button>
    <button
      className="btn btn-success btn-sm"
      style={{ fontSize: '0.85rem', padding: '5px 10px' }}
    >
      Pay Now
    </button>
  </div>
</div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Bookings;
