// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/home-page';


import './App.css'
import { LoginPage } from '../pages/login-page';
import { SingUpPage } from '../pages/sign-up-page';
import { AboutPage } from '../pages/about-page';
import ProfilePage from '../pages/profile-page';
import NavBar from '../navbar/navbar';
import FoodsPage from '../pages/food-page';
import SearchPage from '../pages/search-page';
import OrderPage from '../pages/order-page';

function App() {
  const [IsLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SingUpPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/profile/:username" element={<ProfilePage />} />
        <Route path='/foods' element={<FoodsPage />} /> 
        <Route path='/search' element={<SearchPage />} />
        <Route path='/order/:productId' element={<OrderPage/>} />
      </Routes>
    </Router >
  );
}

export default App;
