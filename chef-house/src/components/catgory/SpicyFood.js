import React, {useState,useEffect} from 'react';
// import products from '../../products';
import { Link } from 'react-router-dom';
import {Row,Col, Card} from 'react-bootstrap';
import './spicy.css'
import Rating from '../rating';
import axios from 'axios';

function SpicyFood() {

const [products,setProducts]=useState([])

useEffect(() => {
  // Fetch the list of products from your Django backend
  axios.get('/api/products/')
    .then((response) => {
      setProducts(response.data);
    })
    .catch((error) => {
      console.error('Error fetching products:', error);
    });
}, []);


  return (
    <div className='spicy-food-container text-center'>
     <h1 className='menu' style={{color:'red'}}>Spicy Foods</h1> 
     <Row xs={1} sm={2} md={2} lg={3} xl={4} className='g-4'>
        {products.map((product) => (
          <Col key={product._id}>
            <Card className='my-3 py-3 rounded'>
              <Link to={`/products/${product._id}`}>
                <Card.Img src={product.image} />
              </Link>
              <Card.Body className='d-flex flex-column align-items-center' style={{color:'black'}}>
                <Link to={`/products/${product._id}`}>
                  <Card.Title as='div' className='text-center mb-0' style={{color:'violet'}}>
                    <strong>{product.name}</strong>
                  </Card.Title>
                </Link>
                <Card.Text as='div' className='text-center'>
                  <div className='my-3'>
                    {product.rating} from {product.numReviews} reviews
                  </div>
                </Card.Text>

                <Card.Text as='h3'>
                $ {product.price}
                </Card.Text>

               <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'green'}/>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default SpicyFood
