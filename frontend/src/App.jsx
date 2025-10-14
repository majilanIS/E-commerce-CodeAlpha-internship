import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/navbar/Nav';
import Shop from './pages/shop/Shop';
import ShopCategory from './pages/shopCategory/ShopCategory';
import Product from './pages/product/Product';
import Cart from './pages/cart/Cart';
import Footer from './components/footer/Footer';
import men_banner from './components/Assets/Frontend_Assets/banner_mens.png';
import women_banner from './components/Assets/Frontend_Assets/banner_women.png';
import kid_banner from './components/Assets/Frontend_Assets/banner_kids.png';
import LoginSignup from './pages/login/LoginSignup';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Nav /> 
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/men" element={<ShopCategory banner={men_banner} category="men" />} />
        <Route path="/women" element={<ShopCategory banner={women_banner} category="women" />} />
        <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kids" />} />
        
        {/* ✅ FIX: Product route must pass a component instance */}
        <Route path="/product/:productId" element={<Product />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
