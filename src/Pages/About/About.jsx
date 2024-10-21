import React from 'react'
import './About.css'
import { Col, Container, Row  , Button} from 'react-bootstrap'
import PageTitle from '../../Components/PageTitle/PageTitle'
export default function About() {
  return (
    <>
    <Container className=' mt-5 text-center'>
      <Row className='mt-5 text-center'>
        <Col>
        <PageTitle title={'About Page'}/>
        </Col>
      </Row>

      <Row className='mt-5 g-4'>
        <Col lg={6} md={12} sm={12}>
        <div className="about__image w-100">
          <img src="./Images/about.jpg" alt="" className='w-100'/>
        </div>
        </Col>

        <Col lg={6} md={12} sm={12}>
        <div className="about__description w-100 text-start d-flex flex-column gap-2">
          <div className='about__description__title text-uppercase fw-bold'>
            <h3 style={{color: '#6d757d'}}>Our Resturant Represents many Varieties</h3>
          </div>
          <div style={{color: '#777'}} className='about__description__paragraph fs-6 fw-light'>
            <p>Welcome to Our Resturant, where culinary excellence meets warm hospitality. Our story is one of passion, dedication, and a commitment to delivering an exceptional dining experience to our cherished guests.
Our Journey

At Donor Resturant , our journey began with a simple yet profound vision to create a haven for food enthusiasts, a place where flavors come alive, and memories are made. Established in 2024, we embarked on this culinary adventure with the aim of offering a unique blend of delectable cuisine, inviting ambiance, and impeccable service.
We believe in the artistry of food. Our culinary team, led by Chef Ahmed, is dedicated to crafting dishes that tantalize the taste buds and celebrate the finest ingredients. From farm-fresh produce to premium cuts of meat, we source only the best to ensure every bite is a culinary delight Hospitality is at the heart of everything we do. From the moment you step through our doors, our friendly and attentive staff are here to make you feel at home. We take pride in creating an atmosphere where every guest is not just a patron but a welcomed member of our extended family.</p></div>
          <div className='about__description__btn'>
            <Button className=' btn btn-danger border-0 rounded-5 fs-5 px-5'>Show More</Button>
          </div>
        </div>
        </Col>
      </Row>
    </Container>
    </>
  )
}
