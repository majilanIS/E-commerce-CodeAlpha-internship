import React from 'react';
import classes from './RelatedProduct.module.css';
import Item from '../items/Item';
import data_product from '../../components/Assets/Frontend_Assets/data';

const RelatedProduct = () => {
  return (
    <div className={classes.relatedProducts}>
      <h1>Related Products</h1>
      <hr />
      <div className={classes.relatedProductsItem}>
        {data_product.map((item) => (
            <Item key={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        ))}
      </div>
    </div>
  );
};

export default RelatedProduct;
