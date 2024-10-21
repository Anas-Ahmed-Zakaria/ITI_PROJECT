import './App.css';
import Layout from './Components/Layout/Layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Products from './Pages/Products/Products';
import {useState } from 'react';
import swal from "sweetalert"
import { CartContext } from './Store/CartContext/CartContext';
import SinglePageProduct from './Pages/SinglePageProduct/SinglePageProduct';
import Cart from './Components/Cart/Cart';
import Contact from './Pages/Contact/Contact';

function App() {
  const[cartItems , setCartItems] = useState([]);
  const[count , setCount] = useState(0);
  const addToCart = (card) => {
    const checkItem = cartItems.find((item) => item.id === card.id);
    if(checkItem) {
      const newItems = cartItems.map((item) => {
        if(item.id === card.id) {
          item.qty = item.qty + 1;
        }
        return item;
      });
      setCartItems([...newItems]);
    }
    else {
      let oldItems = cartItems;
      setCartItems([...oldItems , {...card , qty: 1}]);
      setCount(count + 1);
    }


   swal({
    title: "Added To Cart",
    icon: "success",
  });
  

  }

  const routing = createBrowserRouter([
    {path:'/' , element: <Layout/> , children: [
      {path:'/' , element: <Home/>},
      {path: '/about', element: <About/>},
      {path: '/services', element: <Services/>},
      {path: '/products', element: <Products/>},
      {path:'/products/:cardId' , element: <SinglePageProduct/>},
      {path:'/carts' , element: <Cart/>},
      {path: '/contact' , element: <Contact/>}

    ]
    }
  ]);

  return (
    <>
    <CartContext.Provider value={{cartItems,setCartItems , count , setCount , addToCart}}>
    <RouterProvider router={routing} />
    </CartContext.Provider>

    </>
  );
}

export default App;
