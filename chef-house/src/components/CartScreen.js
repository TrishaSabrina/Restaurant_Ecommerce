import React, { useState, useEffect } from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { useNavigate } from 'react-router-dom';

function CartScreen() {
  const navigate = useNavigate();

  // const checkoutHandler = () => {
  //   navigate('/login?redirect=shipping');
  // };


  const checkoutHandler = () => {
    const userLoggedIn = localStorage.getItem('userInfo');
    if (userLoggedIn) {
      navigate('/shipping'); // Navigate to the shipping page if user is already logged in
    } else {
      navigate('/login?redirect=shipping'); // Navigate to the login page if user is not logged in
    }
  };
  

  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Fetch the current cart from localStorage
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(existingCart);
  }, []);


  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.qty, 0);

  /////////////////////////////////
  //delete item from cart
  const handleRemoveFromCart = (productId) => {
    // Filter out the item with the given productId from the cart
    const updatedCart = cart.filter(item => item.id !== productId);

    // Update the cart state and localStorage
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };



  return (
    <div className='text-center'>
      <div className='mt-3'>
        <Link to='/spicy'>
          <Button style={{ marginRight: '750px' }}>Go Back</Button>
        </Link>
      </div>


      <h1 className='menu' style={{ color: 'red' }}>Shopping Cart</h1>
      <div className='mt-3' style={{ marginBottom: '20px' }}>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <Card className='m-auto' border="info" style={{ width: '40rem', height: '35rem' }}>
              <Card.Header style={{ color: 'blue', backgroundColor: 'skyblue' }} className='menu text-left'>
                <b>
                  <FontAwesomeIcon icon={faShoppingCart} style={{ marginRight: '10px' }} />
                  Shopping Cart
                </b>
              </Card.Header>
              <Card.Body>
                <Card.Title style={{ color: 'violet' }}>Added Foods Details</Card.Title>
                <Card.Text>

                {cart.length === 0 ? (
                    <p className='menu'>The Cart is Empty</p>
                  ) : (

                  <ul className="list-group menu">
                    {cart.map((item) => (
                      <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                        {item.name}
                        <span>
                          Quantity: {item.qty}
                        </span>

                        <span>
                          Price: ${item.price * item.qty}
                        </span>
                        <Button onClick={() => handleRemoveFromCart(item.id)}>
                          <FontAwesomeIcon icon={faTrash} style={{ marginRight: '5px' }} />
                        </Button>


                        <Button variant='btn btn-info' onClick={checkoutHandler}>
                          Proceed to Checkout
                        </Button>
                      </li>
                    ))}
                  </ul>

                  )}
                </Card.Text>
              </Card.Body>

              <div className="card-footer bg-transparent border-info menu">

                <Row className="justify-content-center">
                  <h6 style={{ marginLeft: '370px', color: 'red' }}><b>Total Price: ${totalPrice.toFixed(2)}</b></h6>
                </Row>


              </div>
            </Card>
          </Col>
        </Row>
      </div>


      {/* <h1></h1>
       */}



    </div>
  )
}

export default CartScreen
