import React from 'react';
import classes from './BreakCrum.module.css';
import arrow_icon from '../../components/Assets/Frontend_Assets/arrow.png';

const BreakCrum = ({ product }) => {
  if (!product) return null; // ✅ prevent undefined crash

  return (
    <div className={classes.breakCrum}>
      HOME <img src={arrow_icon} alt="arrow" /> SHOP <img src={arrow_icon} alt="arrow" /> 
      {product.category} <img src={arrow_icon} alt="arrow" /> {product.name}
    </div>
  );
};

export default BreakCrum;
