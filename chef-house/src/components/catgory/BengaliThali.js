import React, {useState,useEffect} from 'react';

import { Link } from 'react-router-dom';
import {Row,Col, Card} from 'react-bootstrap';
import Rating from '../rating';
import axios from 'axios';


function BengaliThali() {

  const [product2,setProduct2]=useState([])

useEffect(() => {
  // Fetch the list of products from your Django backend
  axios.get('/api/product2/')
    .then((response) => {
      setProduct2(response.data);
    })
    .catch((error) => {
      console.error('Error fetching products:', error);
    });
}, []);


  return (
    <div className='spicy-food-container text-center'>
    <h1 className='menu' style={{color:'red'}}>Bengali Thali</h1> 
    <Row xs={1} sm={2} md={2} lg={3} xl={4} className='g-4'>
       {product2.map((product) => (
         <Col key={product._id}>
           <Card className='my-3 py-3 rounded'>
             <Link to={`/product2/${product._id}`}>
               <Card.Img src={product.image} />
             </Link>
             <Card.Body className='d-flex flex-column align-items-center' style={{color:'black'}}>
               <Link to={`/product2/${product._id}`}>
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

export default BengaliThali
