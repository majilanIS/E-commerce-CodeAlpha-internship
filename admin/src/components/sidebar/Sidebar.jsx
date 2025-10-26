import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Sidebar.module.css';

import add_product_icon from '../../Assets/Admin_Assets/product_cart.svg';
import product_list_icon from '../../Assets/Admin_Assets/product_list_icon.svg';

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <Link to='/addproduct' style={{ textDecoration: "none" }}>
        <div className={classes.sidebar_items}>
          <div className={classes.sidebar_item}>
              <img src={add_product_icon} alt="Add Product" />
          </div>
          <p>ADD PRODUCT</p>
        </div>
      </Link>

      <Link to='/listproduct' style={{ textDecoration: "none" }}>
        <div className={classes.sidebar_items}>
          <div className={classes.sidebar_item}>
            <img src={product_list_icon} alt="Product List" />
          </div>
          <p>LIST PRODUCT</p>
        </div>
      </Link>
    </div>
  );
}

export default Sidebar;
