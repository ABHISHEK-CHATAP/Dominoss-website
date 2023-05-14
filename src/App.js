import React from 'react'
import './App.css';

import { Route, Routes } from "react-router-dom"
import Home from './Screens/Home.jsx'
import Cart from './Screens/Cart.jsx'


function App() {


  return (
    <>
        <Routes>
          <Route exact index path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>

    </>)
}

export default App

