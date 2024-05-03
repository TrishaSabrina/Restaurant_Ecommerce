import React from "react";
import './home.css';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Carousel from 'react-bootstrap/Carousel';

import slide1 from '../../../src/assets/img/Chowmin.jpg';
import slide2 from '../../../src/assets/img/Egg.jpg';
import slide3 from '../../../src/assets/img/steak.jpg';
import slide4 from '../../../src/assets/img/Ilish-Pulao.5.jpg';
import slide5 from '../../../src/assets/img/biriyani.jpg';
import slide6 from '../../../src/assets/img/Sorse-Illish.jpg';
import slide7 from '../../../src/assets/img/Burger-Combo.jpg';
import slide9 from '../../../src/assets/img/slide.png';


const getImageNameFromPath = (path) => {
  const parts = path.split('/');
  return parts[parts.length - 1].split('.')[0]; // Extract filename without extension
};
const Home = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="animated-text">
          
            <b>KITCHENER'S SPELL</b>
         
        </h1>
      </div>
      <div className="row mt-5">
          <section className="slider container mb-3">
            <Carousel>
              <Carousel.Item className='slide'>
                <img
                  className="d-block w-100"
                  style={{ maxHeight: '680px', objectFit: 'cover' }}
                  src={slide1}
                  alt="First slide"
                />
                <Carousel.Caption>
                <h3 style={{color:'red'}}>{getImageNameFromPath(slide1)}</h3>
              </Carousel.Caption>
              </Carousel.Item> 
              <Carousel.Item className='slide'>
                <img
                  className="d-block w-100"
                  style={{ maxHeight: '680px', objectFit: 'cover' }}
                  src={slide2}
                  alt="Second slide"
                />
                  <Carousel.Caption>
                <h3 style={{color:'red'}}>{getImageNameFromPath(slide2)}</h3>
              </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className='slide'>
                <img
                  className="d-block w-100"
                  style={{ maxHeight: '680px', objectFit: 'cover' }} 
                  src={slide3}
                  alt="Third slide"
                />
                  <Carousel.Caption>
                <h3 style={{color:'red'}}>{getImageNameFromPath(slide3)}</h3>
              </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item className='slide'>
                <img
                  className="d-block w-100" 
                  style={{ maxHeight: '680px', objectFit: 'cover' }}
                  src={slide4}
                  alt="Fourth slide"
                />
                  <Carousel.Caption>
                <h3 style={{color:'red'}}>{getImageNameFromPath(slide4)}</h3>
              </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item className='slide'>
                <img
                  className="d-block w-100" 
                  style={{ maxHeight: '680px', objectFit: 'cover' }}
                  src={slide5}
                  alt="Fifth slide"
                />
                  <Carousel.Caption>
                <h3 style={{color:'red'}}>{getImageNameFromPath(slide5)}</h3>
              </Carousel.Caption>
              </Carousel.Item>
              
              <Carousel.Item className='slide'>
                <img
                  className="d-block w-100" 
                  style={{ maxHeight: '680px', objectFit: 'cover' }}
                  src={slide6}
                  alt="Sixth slide"
                />
                  <Carousel.Caption>
                <h3 style={{color:'red'}}>{getImageNameFromPath(slide6)}</h3>
              </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className='slide'>
                <img
                  className="d-block w-100" 
                  style={{ maxHeight: '680px', objectFit: 'cover' }}
                  src={slide7}
                  alt="Seventh slide"
                />
                  <Carousel.Caption>
                <h3 style={{color:'red'}}>{getImageNameFromPath(slide7)}</h3>
              </Carousel.Caption>
              </Carousel.Item>
            </Carousel> 
          </section>
        
      </div>
      <div className="row mt-5 text-center">
      <h1 className="bounce-text" style={{color:'purple'}}>People Liked these items the most</h1>
      <div className="col">
         <Carousel>
         <Carousel.Item className='slide'>
                <img
                  className="d-block w-100" 
                  style={{ maxHeight: '680px', objectFit: 'cover' }}
                  src={slide7}
                  alt="Seventh slide"
                />
                </Carousel.Item>
                <Carousel.Item className='slide'>
                <img
                  className="d-block w-100" 
                  style={{ maxHeight: '680px', objectFit: 'cover' }}
                  src={slide6}
                  alt="Seventh slide"
                />
                </Carousel.Item>
                <Carousel.Item className='slide'>
                <img
                  className="d-block w-100" 
                  style={{ maxHeight: '680px', objectFit: 'cover' }}
                  src={slide5}
                  alt="Seventh slide"
                />
                </Carousel.Item>
         </Carousel>
        </div>
       
      </div>
      
      <div className="row mt-5 text-center">
        <h1 className="menu" style={{color:'purple'}}>Menu</h1>
        <div>
        <CardGroup className="justify-content-center" style={{ marginLeft: '150px' }}>
      <Card  style={{ maxWidth: '300px' }}>
        <Card.Img variant="top" src={slide7} />
        <Card.Body>
          <Card.Title style={{color:'Red'}}>Combo Foods</Card.Title>
          <Card.Text>
            <ul>
              <li>Burger with fries combo- 250 tk</li>
              <li>Crispy Chicken+wedges+sauce- 190 tk</li>
              <li>Chicken Sandwich -120 tk</li>
            </ul>
          </Card.Text>
          <Card.Title style={{color:'Red'}}>Spicy Foods</Card.Title>
          <Card.Text>
          <ul>
            <li>Naga Chicken(3 pc) -230 tk</li>
            <li>Spicy Chowmin(1:2) - 199 tk </li>
            <li>BBQ chicken extra spicy(4 pc) - 240 tk </li>
            <li>Naga Burger(chicken/beef +pepsi) -299 tk</li>
            <li>Beef Steak with extra gravy - 250 tk</li>
          </ul>
          </Card.Text>
         
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"><b>Vat 5% included</b></small>
        </Card.Footer>
      </Card>
      <Card  style={{ maxWidth: '300px' }}>
        <Card.Img variant="top" src={slide4} />
        <Card.Body>
          <Card.Title style={{color:'red'}}>Bengali Thali</Card.Title>
          <Card.Text>
        <ul>
          <li>Illish Polao -250 tk </li>
          <li>Shorse Illish+ Rice - 200 tk</li>
          <li>Chicken Biriyani- 230 tk </li>
          <li>Dhakaiya Kacchi -250 tk </li>
        </ul>
          </Card.Text>
          <Card.Title style={{color:'red'}}>Soft Drinks</Card.Title>
          <Card.Text>
        <ul>
          <li>Pepsi -100 tk </li>
          <li>Mounten Dew - 100 tk</li>
          <li>Mirinda - 100 tk </li>
          <li>Lemon mint - 100 tk </li>
        </ul>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"><b>Vat 5% included</b></small>
        </Card.Footer>
      </Card>
      <Card  style={{ maxWidth: '300px' }}>
        <Card.Img variant="top" src={slide3} />
        <Card.Body>
          <Card.Title style={{color:'red'}}>Sweet Desert</Card.Title>
          <Card.Text>
        <ul>
          <li>Payesh -120 tk </li>
          <li>Pudding - 100 tk</li>
          <li>Lacchi - 100 tk </li>
          <li>Nababi Shemai - 230 tk </li>
        </ul>
          </Card.Text>
          <Card.Title style={{color:'red'}}>Set Menu</Card.Title>
          <Card.Text>
        <ul>
          <li>Fried Rice+ 1 pc bbq chicken+veg -170 tk </li>
          <li>Fried Rice + chicken cashew nut salad+2 pc chicken+wedges - 300 tk</li>
        </ul>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"><b>Vat 5% included</b></small>
        </Card.Footer>
      </Card>
    </CardGroup>
        </div>

        <div className="row mt-5">
        <h1 className="animated-card" style={{color:'red', textAlign:'center', marginLeft: '50px'}}>Show this card 
  <img src={slide9} alt="Membership Card" style={{ verticalAlign: 'middle', width: '190px', height: '150px', margin: '0 20px' }} />
  and get this Offer!!!</h1>
          <div className="col-md-6">
        <Card className="animated-card justify-content-center" style={{ width: '30rem', marginLeft: '280px' }}>
      <Card.Img variant="top" src={slide2}/>
      <Card.Body>
        <Card.Title style={{color:'red'}}>Offer in <b>Egg Combo!!</b></Card.Title>
        <Card.Text>
          Offered price---250 tk
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
        <div className="col-md-6">
        <Card className="animated-card justify-content-center" style={{ width: '30rem', marginLeft: '140px' }}>
      <Card.Img variant="top" src={slide1}/>
      <Card.Body>
      <Card.Title style={{color:'red'}}>Offer in <b>Spicy Chowmin!!</b></Card.Title>
        <Card.Text>
        offered Price --- 170 tk
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
        </div>
        <div className="row mt-5">
          <h3 className="menu">No Membership Card?Then <Link to="/contact"  style={{ color: 'red' }}>Contact</Link> Us</h3>
        </div>
      </div>
    </div>
  )
}

export default Home;