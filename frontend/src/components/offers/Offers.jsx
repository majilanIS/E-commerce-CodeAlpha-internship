import React from 'react';
import classes from './Offers.module.css';
import exclusive_image from '../Assets/Frontend_Assets/exclusive_image.png';

const Offers = () => {
  return (
    <div className={classes.offers}>
      <div className={classes.offers_left}>
        <h1>Exclusive</h1>
        <h1>Offers for You</h1>
        <p>ONLY ON BEST SELLER PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className={classes.offers_right}>
        <img src={exclusive_image} alt="Exclusive offer" />
      </div>
    </div>
  );
};

export default Offers;
