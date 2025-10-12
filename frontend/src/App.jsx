import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/navbar/Nav';
import Shop from './pages/shop/Shop';
import ShopCategory from './pages/shopCategory/ShopCategory';
import Product from './pages/product/Product';
import Cart from './pages/cart/Cart';
import Login from './pages/login/Login';
import Footer from './components/footer/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Nav /> 
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/men" element={<ShopCategory category="men"/>} />
        <Route path="/women" element={<ShopCategory category="women"/>} />
        <Route path="/kids" element={<ShopCategory category="kids" />} />
        <Route path='/product"productId'  element={Product} />
        <Route path='/cart' element={Cart} />
        <Route path='/login' element={Login} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
