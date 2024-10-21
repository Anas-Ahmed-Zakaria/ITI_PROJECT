import React from 'react'
import './Cart.css'
import { CartContext } from '../../Store/CartContext/CartContext';
import { useContext } from 'react';
import swal from 'sweetalert';
import PageTitle from '../PageTitle/PageTitle';
import { Col, Container, Row , Button } from 'react-bootstrap';

export default function Cart() {

  const cart = useContext(CartContext);
  const deleteItem = (id) => {
  const newItems = cart.cartItems.filter((item)=>item.id !== id);
  cart.setCartItems([...newItems]);
  swal({
    title: "Product Deleted Successfully",
    icon: "success",
  });
  cart.setCount(cart.count - 1);
  }

  return (
    <>
    <div className='carts__section mt-4'>
      <Container>
          <Row>
            <Col className='mt-4 text-center'>
            <PageTitle title='Cart Page'/>
            </Col>
          </Row>

          <Row>
            <Col md={12} className='mt-5'>
            {cart.cartItems.length ? 
          <table className='table table-bordered table-responsive w-75 mx-auto'>
            <thead>
              <tr className='bg-danger'>
                <th className=' bg-danger text-white text-center fw-medium fs-4'>Image</th>
                <th className=' bg-danger text-white text-center fw-medium fs-4'>Name</th>
                <th className=' bg-danger text-white text-center fw-medium fs-4'>Country</th>
                <th className=' bg-danger text-white text-center fw-medium fs-4'>Price</th>
                <th className=' bg-danger text-white text-center fw-medium fs-4'>Quantity</th>
                <th className=' bg-danger text-white text-center fw-medium fs-4'>Total</th>
                <th className=' bg-danger text-white text-center fw-medium fs-4'>Delete</th>
              </tr>
            </thead>
            <tbody>
            {cart.cartItems.map((item)=> {
                return (
                <tr key={item.id} className=''>
                  <td className=' text-center fs-5 bg-dark-subtle text-white'><img style={{width: "25%"}} src={item.image} alt="" /></td>
                  <td className=' text-center fs-5 bg-dark-subtle text-white'>{item.name}</td>
                  <td className=' text-center fs-5 bg-dark-subtle text-white'>{item.cuisine}</td>
                  <td className=' text-center fs-5 bg-dark-subtle text-white'>${item.reviewCount}</td>
                  <td className=' text-center fs-5 bg-dark-subtle text-white'>{item.qty}</td>
                  <td className=' text-center fs-5 bg-dark-subtle text-white'>${(item.reviewCount)*(item.qty)}</td>
                  <td className=' text-center fs-5 bg-dark-subtle text-white'>
                  <Button onClick={()=>deleteItem(item.id)} variant="danger" className='btn btn-danger rounded-3 fs-5'>Delete</Button>
                  </td>
                </tr>
                );
              })}
            </tbody>
          </table>
          :
          <h2 className='text-center p-3 my-3 text-danger'>Cart Is Empty</h2>
        }
            </Col>
          </Row>
      </Container>
    </div>
    </>
  )
}