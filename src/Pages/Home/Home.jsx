import React from 'react'
import './Home.css';
import {Carousel , Container } from 'react-bootstrap';
// import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <>
    <div className='home__section'>
    <Container>
    <Carousel className='carousel'>
      <Carousel.Item>
        <div style={{width: '100%'}} className='w-100'>
        <img className='w-100' style={{width: '100px', objectFit: 'cover'}} src="Images/res1.jpg" alt="" />
        </div>
      </Carousel.Item>


      <Carousel.Item>
      <div style={{width: '100%'}} className='w-100'>
        <img className='w-100' style={{width: '100px', objectFit: 'cover'}} src="Images/res2.jpg" alt="" />
        </div>
      </Carousel.Item>


      <Carousel.Item>
      <div style={{width: '100%'}} className='w-100'>
        <img className='w-100' style={{width: '100px', objectFit: 'cover'}} src="Images/res3.jpg" alt="" />
        </div>
      </Carousel.Item>

      <Carousel.Item>
      <div style={{width: '100%'}} className='w-100'>
        <img className='w-100' style={{width: '100px', objectFit: 'cover'}} src="Images/res4.jpg" alt="" />
        </div>
      </Carousel.Item>


      <Carousel.Item>
      <div style={{width: '100%'}} className='w-100'>
        <img className='w-100' style={{width: '100px', objectFit: 'cover'}} src="Images/res5.jpeg" alt="" />
        </div>
      </Carousel.Item>
    </Carousel>
    </Container>
    </div>
    </>
  )
}
