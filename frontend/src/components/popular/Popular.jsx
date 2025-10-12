import React from 'react';
import data_product from '../Assets/Frontend_Assets/data';
import classes from './Popular.module.css';
import Item from '../items/Item';

const Popular = () => {
  return (
    <div className={classes.popular}>
      {/* 🔹 Section Title */}
      <div className={classes.title_container}>
        <h1>POPULAR IN WOMEN</h1>
        <hr />
      </div>

      {/* 🔹 Product Grid */}
      <div className={classes.items_container}>
        {data_product.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            image={item.image}
            name={item.name}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
