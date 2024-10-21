import React from 'react'
import './products.css'
import CardContent from '../../Components/CardPart/CardContent/CardContent'
import { Container, Row } from 'react-bootstrap'
import PageTitle from '../../Components/PageTitle/PageTitle'
export default function Products() {
  return (
    <>
    <Container className='mx-auto'>
      <Row className='my-5'>
      <PageTitle title="Products Page"/>
      </Row>
      <Row className='mt-5 g-3 mx-auto'>
        <CardContent/>
      </Row>
    </Container>
    </>
  )
}
