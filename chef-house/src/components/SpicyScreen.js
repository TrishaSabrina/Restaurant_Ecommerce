import React, {useState,useEffect} from 'react';

import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button, Card,Form } from 'react-bootstrap';


import Rating from './rating'
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function SpicyScreen() {
  const [qty,setQty] = useState(1)
  const { id } = useParams();
  // const product = products.find((p) => p._id === id);

  const [products,setProducts]=useState([])

useEffect(() => {
  // Fetch the list of products from your Django backend
  axios.get(`/api/products/${id}`)
    .then((response) => {
      setProducts(response.data);
    })
    .catch((error) => {
      console.error('Error fetching products:', error);
    });
}, [id]);

////*****showing all the product which was added before and after*******

const handleAddToCart = () => {
  // Fetch the current cart from localStorage or initialize an empty array
  const existingCart = JSON.parse(localStorage.getItem('cart')) || [];

  // Check if the product is already in the cart
  const existingProductIndex = existingCart.findIndex(item => item.id === id);

  if (existingProductIndex !== -1) {
    // If the product is already in the cart, remove it
    existingCart.splice(existingProductIndex, 1);
  }

  // Add the new product with the selected quantity
  existingCart.push({ id, name: products.name, price: products.price, qty });

  // Save the updated cart back to localStorage
  localStorage.setItem('cart', JSON.stringify(existingCart));

  toast.success('Added to cart successfully!');
};


///////*****just the specific product will be added on cart and show the specific product's details

// const handleAddToCart = () => {
//   // Create a new array with the information of the current product
//   const newCart = [{ id, name: products.name, price: products.price, qty }];

//   // Save the new cart to localStorage
//   localStorage.setItem('cart', JSON.stringify(newCart));

//   // Show a success message
//   alert('Added to cart successfully!');
// };


// const handleAddToCart = () => {
//     // Create a new array with the information of the current product
//     const newCart = [{ id, name: products.name, price: products.price, qty }];

//     // Save the new cart to localStorage
//     localStorage.setItem('cart', JSON.stringify(newCart));

//     // Show a success message using react-toastify
//     toast.success('Added to cart successfully!');
//   };

  return (
    <div>
      <Link to="/spicy" style={{ marginLeft: '1250px' }} className='btn btn-primary my-3' >Go Back</Link>
      <Row className='text-center'>

        <Col md={6}>
          <Image src={products.image} alt={products.name} style={{ width: '500px', height: '500px', marginLeft: '10px' }}></Image>
        </Col>

        <Col md={3}>
          <ListGroup className='flush' style={{marginLeft:'-70px'}}>
            <ListGroup.Item>
              <h1>{products.name}</h1>
            </ListGroup.Item>


            <ListGroup.Item>
              <Rating
                value={products.rating}
                text={`${products.numReviews} reviews`}
                color={"green"}>

              </Rating>
            </ListGroup.Item>

            <ListGroup.Item>
              Price: ${products.price}
            </ListGroup.Item>

            <ListGroup.Item>
             Description : {products.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3}>
        <Card style={{marginRight:'20px'}}>
          <ListGroup variant='flush'>
          <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>${products.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {products.countInStock > 0 ? "In Stock" : "Out of Stock"}
                    </Col>
                  </Row>
                </ListGroup.Item>

                {products.countInStock >0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Qty</Col>
                    <Col className="my-1">
                        <Form.Control
                          as="select"
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {[...Array(products.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                  </Row>
                </ListGroup.Item>
                )}

                <ListGroup.Item>
                 
                  <Button
                    className="btn-block"
                    disabled={products.countInStock == 0}
                    type="button"
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </Button>

                </ListGroup.Item>



          </ListGroup>
        </Card>
        </Col>
      </Row>
      <div className='mt-3' style={{marginLeft:'250px'}}> <h4>{products.name}</h4> </div>
      
      
    </div>
  )
}

export default SpicyScreen
