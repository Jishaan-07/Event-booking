import React from 'react'
import { Card } from 'react-bootstrap'
import taylor from '../assets/taylor.png';
import SERVER_BASE_URL from '../services/serverUrl';
 
const EventCard = ({displayData}) => {
  return (
    <>
    <div className="d-flex justify-content-center align-items-center  ">
    
          <Card style={{ width: '18rem' }} className="mb-4 shadow mx-5">
            <Card.Img variant="top" className='img-fluid' src={`${SERVER_BASE_URL}/uploads/${displayData?.eventImage}`} />
            <Card.Body>
              <Card.Title className='fw-bolder text-center'>{displayData?.eventName}</Card.Title>
              <Card.Text className='text-center'>
                <p>{displayData?.location}</p>
                <p>{displayData?.date}</p>
                <p>{displayData?.eventType}</p>
              </Card.Text>
            </Card.Body>
          </Card>

   
  
  

    </div>
    </>
  )
}

export default EventCard