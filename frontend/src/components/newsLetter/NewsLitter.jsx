import React from 'react';
import classes from './NewsLitter.module.css';

const NewsLitter = () => {
  return (
    <div className={classes.newsletter}>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div className={classes.form}>
        <input type="email" placeholder="Your Email id" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLitter;
