import { useState, useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Row, Col, Image, ListGroup, Button, Card, Form } from "react-bootstrap";
import FormContainer from './FormContainer';



function LoginScreen({location = {}}) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);
 
  const redirect = location.search ? location.search.split('=')[1] :'/home'


  useEffect(() => {
      if (userInfo) {
          navigate(redirect || '/');
      }
  }, [navigate, userInfo, redirect]);

const submitHandler = async (e) => {
  e.preventDefault();


  try {
      const config = {
          headers: {
              'Content-type': 'application/json'
          }
      };

      const { data } = await axios.post('/api/users/login/', {
          'username': email,
          'password': password
      }, config);

      setUserInfo(data);
      localStorage.setItem('userInfo',JSON.stringify(data))

      // Redirect to another page upon successful login
      navigate(redirect || '/');
  } catch (error) {
      // Update state with the error
      const errorMessage =
          error.response && error.response.data.detail
              ? error.response.data.detail
              : error.message;

      setError(errorMessage);
  }

//  console.log(password,username);

}
return (
  <div>
   <FormContainer>
    <h1>Sign In</h1>
    {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
    <Form onSubmit={submitHandler}>


        <Form.Group controlId='email'>
          <Form.Label>Email Address </Form.Label>
          <Form.Control required type='email' placeholder='Enter Email' value={email} onChange={(e)=> setEmail(e.target.value)}></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password</Form.Label>
          <Form.Control required type='password' placeholder='Enter Password' value={password} onChange={(e)=> setPassword(e.target.value)}></Form.Control>
        </Form.Group>

      <Button className='mt-3' type='submit' variant='primary'>Sign In</Button>

    </Form>

    <Row className='py-3'>
        <Col>
        New Customer? 
        <Link to={redirect?`/register?redirect=${redirect}`:'/register'}>Register</Link>
        </Col>

    </Row>

   </FormContainer>
  </div>
  );
}

export default LoginScreen;
