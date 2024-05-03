import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap';
import Rating from './rating';

import axios from 'axios';

function DesertScreen() {
    const { id } = useParams();
  // const product = product3.find((p) => p._id === id);

  const [product,setProduct]=useState([])

  useEffect(() => {
    // Fetch the list of products from your Django backend
    axios.get(`/api/product3/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div>

<Link to="/desert" style={{ marginLeft: '1250px' }} className='btn btn-primary my-3' >Go Back</Link>
      <Row className='text-center'>

        <Col md={6}>
          <Image src={product.image} alt={product.name} style={{ width: '500px', height: '500px', marginLeft: '10px' }}></Image>
        </Col>

        <Col md={3}>
          <ListGroup className='flush' style={{marginLeft:'-70px'}}>
            <ListGroup.Item>
              <h1>{product.name}</h1>
            </ListGroup.Item>


            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
                color={"green"}>

              </Rating>
            </ListGroup.Item>

            <ListGroup.Item>
              Price: ${product.price}
            </ListGroup.Item>

            <ListGroup.Item>
             Description : {product.description}
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
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Button
                    className="btn-block"
                    disabled={product.countInStock == 0}
                    type="button"
                    
                  >
                    Add to Cart
                  </Button>
                </ListGroup.Item>

          </ListGroup>
        </Card>
        </Col>
      </Row>
      <div className='mt-3' style={{marginLeft:'250px'}}> <h4>{product.name}</h4> </div>
      
      
    </div>
  )
}

export default DesertScreen
