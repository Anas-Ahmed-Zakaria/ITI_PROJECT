import React, { useEffect, useState } from 'react'
import './CardContent.css'
import axios from 'axios';
import CardDesign from '../CardDesign/CardDesign';
import { Col } from 'react-bootstrap';

export default function CardContent() {

const [cards , setCards] = useState([]);
let Get_Data_From_API = async () => {
    const {data} = await axios.get("https://dummyjson.com/recipes");
    setCards(data["recipes"]);
    console.log(data["recipes"]);
};

useEffect(()=> {
    Get_Data_From_API();
},[]);

  return (
    <>
    {!cards.length ? <h2 className='text-center p-3 my-3 text-danger'> Loading ...</h2> : cards.map((card)=>{
        return (
            <Col sm={12} md={6} lg={3}>
            <div>
            <CardDesign key={card.id} card={card}/>
            </div>
            </Col>
        )
    })}
    </>
  )
}
