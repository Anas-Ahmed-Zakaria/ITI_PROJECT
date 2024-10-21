import React, { useContext } from 'react';
import  Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {NavLink} from 'react-router-dom';
import { CartContext } from '../../Store/CartContext/CartContext';
import { RiReactjsLine } from 'react-icons/ri';
export default function NavBars() {
const cart = useContext(CartContext);
return (
    <>
    <Navbar expand="lg" className=" bg-secondary shadow fixed-top">
    <Container className='align-items-center'>
        <Navbar.Brand href="#home"><h2 style={{color: '#6d757d !mportant'}} className='bg-white d-flex justify-content-center align-items-center p-2 rounded-5 fs-3 text-white'><RiReactjsLine style={{color: '#6d757d'}}/>
        </h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto text-decoration-none gap-5 fs-5 fw-medium py-2 text-white">
            <NavLink className='text-decoration-none rounded-4 px-3 py-1 text-white' to="/" style={({ isActive, isPending, isTransitioning }) => {return {backgroundColor: isActive ? "red" : "", color: isPending ? "" : "black",viewTransitionName: isTransitioning ? "slide" : "",};}}>Home</NavLink>
            <NavLink className='text-decoration-none rounded-4 px-3 py-1 text-white' to="/about" style={({ isActive, isPending, isTransitioning }) => {return {backgroundColor: isActive ? "red" : "", color: isPending ? "" : "black",viewTransitionName: isTransitioning ? "slide" : "",};}}>About</NavLink>
            <NavLink className='text-decoration-none rounded-4 px-3 py-1 text-white' to="/services" style={({ isActive, isPending, isTransitioning }) => {return {backgroundColor: isActive ? "red" : "", color: isPending ? "" : "black",viewTransitionName: isTransitioning ? "slide" : "",};}}>Services</NavLink>
            <NavLink className='text-decoration-none rounded-4 px-3 py-1 text-white' to="/products" style={({ isActive, isPending, isTransitioning }) => {return {backgroundColor: isActive ? "red" : "", color: isPending ? "" : "black",viewTransitionName: isTransitioning ? "slide" : "",};}}>Products</NavLink>            
            <NavLink className='text-decoration-none rounded-4 px-3 py-1 text-white' to="/carts" style={({ isActive, isPending, isTransitioning }) => {return {backgroundColor: isActive ? "red" : "", color: isPending ? "" : "black",viewTransitionName: isTransitioning ? "slide" : "",};}}>Carts<span className='bg-dark-subtle px-2 py-0 ms-1 rounded-5 text-white'>{cart.count}</span></NavLink>            
            <NavLink className='text-decoration-none rounded-4 px-3 py-1 text-white' to="/contact" style={({ isActive, isPending, isTransitioning }) => {return {backgroundColor: isActive ? "red" : "", color: isPending ? "" : "black",viewTransitionName: isTransitioning ? "slide" : "",};}}>Contact</NavLink>            
        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
    </>
  )
}
