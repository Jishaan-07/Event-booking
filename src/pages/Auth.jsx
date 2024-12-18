import React from 'react';
import logo from '../assets/Logo.png';
import loginImg from '../assets/loginImg.png';

import { FloatingLabel, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Auth = ({ insideRegister }) => {
  return (
    <>
      <div
        style={{ minHeight: '100vh', width: '100%', backgroundColor: 'rgba(220, 232, 255, 1)' }}
        className="d-flex justify-content-center align-items-center"
      >
        <div className="container w-75">
          <div className="row align-items-center">
            <div
              className="col-lg-6 border rounded-3 shadow mt-5"
              style={{ backgroundColor: 'rgba(150, 184, 250, 1)', padding: '40px', borderRadius: '20px', width: '100%', maxWidth: '500px' }}
            >
              <div className='d-flex justify-content-center'>
                <img src={logo} alt="Logo" className="img-fluid mb-4" />
              </div>
              <h4 className="text-center fw-bolder text-light fs-3 mb-4">
                Sign {insideRegister ? 'up' : 'in'} to your account
              </h4>
              <Form>
                {insideRegister && (
                  <FloatingLabel controlId="floatingInputUsername" label="Username" className="mb-3">
                    <Form.Control type="text" placeholder="Username" />
                  </FloatingLabel>
                )}
                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                  <Form.Control type="email" placeholder="Email" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control type="password" placeholder="Password" />
                </FloatingLabel>
                <div className="mt-3 d-flex justify-content-center">
                  <Button variant="primary" className="shadow px-5 py-2 mb-2 rounded-pill">
                    {insideRegister ? 'Sign Up' : 'Sign In'}
                  </Button>
                </div>
                <p className="text-center text-light mt-2">
                  {insideRegister ? 'Existing User?' : 'New User?'} Please{' '}
                  <Link to={insideRegister ? '/login' : '/register'} className="text-light fw-bold">
                    {insideRegister ? 'Login' : 'Register'}
                  </Link>
                </p>
              </Form>
            </div>
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
              <img src={loginImg} className='img-fluid rounded' style={{ maxWidth: '400px' }} alt="Login illustration" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;
