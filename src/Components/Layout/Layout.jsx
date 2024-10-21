import React from 'react'
import './Layout.css'
import NavBars from '../NavBars/NavBars'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
export default function Layout() {
  return (
    <>
     <NavBars/>
     <Outlet/>
     <Footer/>
    </>
   
  )
}
