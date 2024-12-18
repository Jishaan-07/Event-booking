import React from 'react'
import { Card } from 'react-bootstrap'
import taylor from '../assets/taylor.png';
 
const EventCard = () => {
  return (
    < >
    <div className="d-flex justify-content-center align-items-center  ">
    
          <Card style={{ width: '18rem' }} className="mb-4 mx-5">
            <Card.Img variant="top" className='img-fluid' src={taylor} />
            <Card.Body>
              <Card.Title className='fw-bolder text-center'>Taylor Swift</Card.Title>
              <Card.Text className='text-center'>
                <p>New York</p>
                <p>Dec 14, 21:00</p>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }} className="mb-4 mx-5">
            <Card.Img variant="top" className='img-fluid' src={taylor} />
            <Card.Body>
              <Card.Title className='fw-bolder text-center'>Taylor Swift</Card.Title>
              <Card.Text className='text-center'>
                <p>New York</p>
                <p>Dec 14, 21:00</p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} className="mb-4 mx-5">
            <Card.Img variant="top" className='img-fluid' src={taylor} />
            <Card.Body>
              <Card.Title className='fw-bolder text-center'>Taylor Swift</Card.Title>
              <Card.Text className='text-center'>
                <p>New York</p>
                <p>Dec 14, 21:00</p>
              </Card.Text>
            </Card.Body>
          </Card>
  
  

    </div>
    </>
  )
}

export default EventCard