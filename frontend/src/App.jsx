import React from 'react'
import { NavBar } from './components/Nav-Bar/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import './components/Header/Header.css'
import Footer from './components/Footer/footer'
import { useState } from 'react';
import LoginPopup from './components/loginPopup/loginPopup';


const App = () => {
  const [showLogin,setShowLogin] = useState(false)
  return (
    <> {/* this is a fragment*/}
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
        <NavBar setShowLogin={setShowLogin}/> {/*NavBar component added to app component*/}
        {/*creatiung routes for all three pages--->*/}
        <Routes>
          < Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>

  )
}

export default App