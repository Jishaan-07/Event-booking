 
import React, { useState } from 'react'
import Header from '../components/Header'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { InputGroup } from 'react-bootstrap';

const MyProfile = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <> 
    <Header/>
    <div style={{paddingTop:'100px'}} className="container ">
    <h1 style={{
          fontFamily: '"Hubot Sans", serif',
          fontWeight: '500',
          fontSize: '3.5rem',
          opacity: 0.9,
          marginBottom: '10px',
        }} className='fw-bolder'>My <span className='text-primary fw-bolder'>Profile</span></h1>
        <h4 className='mt-5'>Contact Information</h4>       
        <hr />
        <p className='text-dark fw-bolder'>Username : <span className='mx-3 text-primary'>Jishan</span></p>
        <p className='text-dark fw-bolder'>Email : <span className='mx-5 text-primary'>jishan@gmail.com</span></p>
        <p className='text-dark fw-bolder'>Phone No : <span className='mx-3 text-primary'>+91 85274019</span></p>
        <Button onClick={handleShow} className='rounded-pill px-4' variant="success">Edit</Button>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-dark fw-bolder'><span className='text-primary'>My</span> Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Username:</InputGroup.Text>
        <Form.Control
          
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Phone No:</InputGroup.Text>
        <Form.Control
          
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className='bg-danger' onClick={handleClose}>
            Cancel
          </Button>
          <Button className='bg-success' variant="primary">Save</Button>
        </Modal.Footer>
      </Modal>
    </div>
    </>
  )
}

export default MyProfile