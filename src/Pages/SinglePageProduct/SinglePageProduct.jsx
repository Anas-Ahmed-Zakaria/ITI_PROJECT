import React from 'react';
import './SinglePageProduct.css';
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import {useParams } from "react-router-dom";
import { CartContext } from '../../Store/CartContext/CartContext';
import { Card, CardText, Col, Container, Row , Button} from 'react-bootstrap';
import PageTitle from '../../Components/PageTitle/PageTitle';


export default function SinglePageProduct() {
    const params = useParams();
    const [card , setCard] = useState(false);
    const cart = useContext(CartContext);

  useEffect(()=>{
    try {
    axios.get(`https://dummyjson.com/recipes/${params.cardId}`)
    .then(({data})=>{console.log(data)
        setCard({data});
    });
    }
    
    catch (error){
      console.log(error);
    }
},[]);

  
  return (
    <>
    <Container className='text-center text-danger mx-auto mt-5'>
      <Row className='my-4 text-dark'>
        <Col md={12}>
        <PageTitle title = {`Single Product Page`}/>
        </Col>
      </Row>
        {card?(<>
          <Card className='shadow rounded my-5 mx-auto w-50 card'>
            <Card.Img style={{objectFit: 'cover'}} variant="top" src={card.data.image} className='image w-100 card-img-top'/>
            <Card.Body style={{backgroundColor: '#ccc'}} className='border'>
                <Card.Title className='fs-4' style={{color: '#333'}}>{card.data.name}</Card.Title>
                <CardText className='fs-4 fw-medium text-danger'>{card.data.cuisine}</CardText>
                <CardText className='py-1 rounded fs-5 fw-medium text-white bg-warning'>Price: ${card.data.reviewCount}</CardText>
                <Button style={{backgroundColor: '#6d757d'}} onClick={()=>cart.addToCart(card)} variant="primary" className='addBtn border-0 btn mx-auto w-100 fs-5 fw-medium mb-2'>Add To Cart</Button>
            </Card.Body>
        </Card>
        </>):(<>
        <Row >
          <Col className='mx-auto mt-5' md={10}>
          <h1 className='text-center text-danger d-flex justify-content-center align-content-center align-content-center align-items-center mx-auto'>Not</h1>
          </Col>
        </Row>
        </>)}
    </Container>
    </>
  )
}
