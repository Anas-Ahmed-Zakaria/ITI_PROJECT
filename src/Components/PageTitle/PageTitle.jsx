import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default function PageTitle({title}) {
  return (
    <>
    <Row className='mt-4 text-center mx-auto'>
        <Col>
        <div className='text-center mx-auto'>
        <h1 className="text-center display-2 mx-auto">{title}</h1>
        </div>
        </Col>
    </Row>
    </>
  )
}
