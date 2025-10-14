import React from 'react';
import classes from './Item.module.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className={classes.item}>
      <div className={classes.image_container}>
        <Link to={`/product/${props.id}`}>
          <img src={props.image} alt="Product" />
       </Link>
      </div>
      <div className={classes.name_container}>
        <h1>{props.name}</h1>
      </div>
      <div className={classes.itemPrices}>
        <div className={classes.itemNewPrice}>${props.new_price}</div>
        <div className={classes.itemOldPrice}>${props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
