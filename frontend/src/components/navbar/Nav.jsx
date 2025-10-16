import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Nav.module.css';
import logo from '../Assets/Frontend_Assets/logo.png';
import cart_icon from '../Assets/Frontend_Assets/cart_icon.png';
import nav_dropdown_icon from '../../components/Assets/Frontend_Assets/dropdown_icon.png';
import { ShopContext } from '../../context/ShopContext';

const Nav = () => {
  const [menu, setMenu] = useState('shop');
  const { getTotalCartItems } = useContext(ShopContext);

  // 🔹 Dropdown toggler
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const dropdown_toggle = (e) => {
    setMenuOpen((prev) => !prev);
    e.target.classList.toggle("open")
  };

  return (
    <nav className={classes.navbar}>
      {/* 🔹 Logo */}
      <div className={classes.nav_logo}>
        <Link to='/'>
          <img src={logo} alt="Logo" />
        </Link>
      </div>

      {/* 🔹 Dropdown Icon (hamburger) */}
      <div className={classes.dropdown_nav} onClick={dropdown_toggle}>
         <img src={nav_dropdown_icon} alt="dropdown icon" />
      </div>


      {/* 🔹 Menu List */}
      <ul
        ref={menuRef}
        className={`${classes.nav_menu} ${menuOpen ? classes.nav_menu_visible : ''}`}
      >
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

      {/* 🔹 Login + Cart */}
      <div className={classes.nav_login_cart}>
        <Link to='/login'>
          <button>Login</button>
        </Link>
        <Link to='/cart'>
          <div className={classes.cart_container}>
            <img src={cart_icon} alt="Cart Icon" />
            <div className={classes.cart_count}>{getTotalCartItems()}</div>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
