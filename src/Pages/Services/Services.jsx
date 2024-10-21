import React from 'react'
import './Services.css'
import { Col, Container, Row } from 'react-bootstrap'
import PageTitle from '../../Components/PageTitle/PageTitle'
import { FaMedal, FaMoneyCheckAlt, FaMotorcycle, FaPhoneAlt, FaStar } from 'react-icons/fa'
import { IoPersonSharp, IoTime } from 'react-icons/io5'
import { BiSolidOffer } from 'react-icons/bi'
import { RiPriceTagFill } from 'react-icons/ri'
export default function Services() {
  return (
    <>
    <Container className='mt-5 d-flex flex-column gap-5'>
      <Row className='mt-4 text-center'>
        <Col>
        <PageTitle title={'Services Page'}/>
        </Col>
      </Row>

      <Row className='g-3 mb-2'>
        <Col lg={4} md={6} sm={12}>
        <div style={{color: '#6d757d'}} className='box shadow p-5 border rounded text-center d-flex flex-column gap-3'>
          <div className='box__icon fs-3 mx-auto'>
          <FaMedal/>
          </div>
          <div className='box__title'>
            <h2>Quality</h2>
          </div>
        </div>
        </Col>

        <Col lg={4} md={6} sm={12}>
        <div style={{color: '#6d757d'}} className='box shadow p-5 border rounded text-center d-flex flex-column gap-3'>
          <div className='box__icon fs-3 mx-auto'>
          <FaStar/>
          </div>
          <div className='box__title'>
            <h2>Reliability</h2>
          </div>
        </div>
        </Col>

        <Col lg={4} md={6} sm={12}>
        <div style={{color: '#6d757d'}} className='box shadow p-5 border rounded text-center d-flex flex-column gap-3'>
          <div className='box__icon fs-3 mx-auto'>
          <FaMotorcycle/>
          </div>
          <div className='box__title'>
            <h2>Fast Delivery</h2>
          </div>
        </div>
        </Col>


        <Col lg={4} md={6} sm={12}>
        <div style={{color: '#6d757d'}} className='box shadow p-5 border rounded text-center d-flex flex-column gap-3'>
          <div className='box__icon fs-3 mx-auto'>
          <FaMoneyCheckAlt/>
          </div>
          <div className='box__title'>
            <h2>Payment</h2>
          </div>
        </div>
        </Col>


        <Col lg={4} md={6} sm={12}>
        <div style={{color: '#6d757d'}} className='box shadow p-5 border rounded text-center d-flex flex-column gap-3'>
          <div className='box__icon fs-3 mx-auto'>
          <FaPhoneAlt/>
          </div>
          <div className='box__title'>
            <h2>Calling</h2>
          </div>
        </div>
        </Col>


        <Col lg={4} md={6} sm={12}>
        <div style={{color: '#6d757d'}} className='box shadow p-5 border rounded text-center d-flex flex-column gap-3'>
          <div className='box__icon fs-3 mx-auto'>
          <IoTime/>
          </div>
          <div className='box__title'>
            <h2>On time</h2>
          </div>
        </div>
        </Col>


        <Col lg={4} md={6} sm={12}>
        <div style={{color: '#6d757d'}} className='box shadow p-5 border rounded text-center d-flex flex-column gap-3'>
          <div className='box__icon fs-3 mx-auto'>
          <BiSolidOffer/>
          </div>
          <div className='box__title'>
            <h2>Offers</h2>
          </div>
        </div>
        </Col>


        <Col lg={4} md={6} sm={12}>
        <div style={{color: '#6d757d'}} className='box shadow p-5 border rounded text-center d-flex flex-column gap-3'>
          <div className='box__icon fs-3 mx-auto'>
          <IoPersonSharp/>
          </div>
          <div className='box__title'>
            <h2>Client Acceptance</h2>
          </div>
        </div>
        </Col>


        <Col lg={4} md={6} sm={12}>
        <div style={{color: '#6d757d'}} className='box shadow p-5 border rounded text-center d-flex flex-column gap-3'>
          <div className='box__icon fs-3 mx-auto'>
          <RiPriceTagFill/>
          </div>
          <div className='box__title'>
            <h2>Suitable Prices</h2>
          </div>
        </div>
        </Col>
      </Row>
    </Container>
    </>
  )
}
