import React from 'react';
import Header from '../components/Header';
import EventCard from '../components/EventCard';
import { Link } from 'react-router-dom';

const AllEvents = () => {
  return (
    <>
      <Header />
      <div className="text-center fw-bolder  mt-5">
        <h1 style={{
          fontFamily: '"Hubot Sans", serif',
          fontWeight: '500',
          fontSize: '3.5rem',
          opacity: 0.9,
          marginBottom: '10px',
        }} className='fw-bolder pt-5'><span className='text-primary fw-bolder'>All</span> Events</h1>
      </div>
      <div style={{paddingTop:'70px'}} className="d-flex justify-content-center align-items-center mt-5">
      <Link
        to={`/event-view/:id`}
        style={{ textDecoration: 'none' }} 
      >
          <EventCard />
        </Link>
      </div>
    </>
  );
};

export default AllEvents;
