import React, { useContext } from 'react';
import './CardDesign.css'
import { CartContext } from '../../../Store/CartContext/CartContext';
import {Card , Button, CardText } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CiSquarePlus } from 'react-icons/ci';
import { FaEye } from 'react-icons/fa';
export default function CardDesign({key , card}) {
    const cart = useContext(CartContext);
    return (
        <>
        <Card id={key} className='shadow rounded'>
            <Card.Img style={{objectFit: 'cover'}} variant="top" src={card.image} className='w-100'/>
            <Card.Body style={{backgroundColor: '#ccc'}}>
                <Card.Title style={{color: '#333'}}>{card.name}</Card.Title>
                <CardText className='fs-5 fw-medium text-danger'>{card.cuisine}</CardText>
                <CardText style={{width:'fit-content'}} className='fs-5 fw-medium bg-warning text-white px-3 rounded'>Price: ${card.reviewCount}</CardText>
                <Button style={{backgroundColor: '#6d757d'}} onClick={()=>cart.addToCart(card)} variant="primary" className='addBtn border-0 btn mx-auto w-100 fs-5 fw-medium mb-2'>Add To Cart</Button>
                <Link to={`/products/${card.id}`} className='detail border-0 btn btn-danger mx-auto w-100 fs-5 fw-medium'>Show Details</Link> 
            </Card.Body>
        </Card>
        </>
    )
}


