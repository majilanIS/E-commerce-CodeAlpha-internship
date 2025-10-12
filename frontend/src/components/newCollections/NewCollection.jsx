import React from 'react';
import classes from './NewCollection.module.css';
import new_collection from '../Assets/Frontend_Assets/new_collections';
import Item from '../items/Item';

const NewCollection = () => {
  return (
    <div className={classes.new_collections}>
      <h1>New Collections</h1>
      <hr />
      <div className={classes.collections}>
        {new_collection.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default NewCollection;
