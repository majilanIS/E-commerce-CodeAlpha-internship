import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Nav.module.css';
import logo from '../Assets/Frontend_Assets/logo.png';
import cart_icon from '../Assets/Frontend_Assets/cart_icon.png';

const Nav = () => {
  const [menu, setMenu] = useState('shop');

  return (
    <nav className={classes.navbar}>
      <div className={classes.nav_logo}>
        <Link to='/'>
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      <ul className={classes.nav_menu}>
        <li onClick={() => setMenu("shop")}>
          <Link to='/' className={menu === 'shop' ? classes.active : ''}>Shop</Link>
        </li>
        <li onClick={() => setMenu("men")}>
          <Link to='/men' className={menu === 'men' ? classes.active : ''}>Men</Link>
        </li>
        <li onClick={() => setMenu("women")}>
          <Link to='/women' className={menu === 'women' ? classes.active : ''}>Women</Link>
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to='/kids' className={menu === 'kids' ? classes.active : ''}>Kids</Link>
        </li>
      </ul>

      <div className={classes.nav_login_cart}>
        <Link to='/login'>
          <button>Login</button>
        </Link>
        <Link to='/cart'>
          <img src={cart_icon} alt="Cart Icon" />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
