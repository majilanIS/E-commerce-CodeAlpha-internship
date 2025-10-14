import React, { useContext } from 'react';
import classes from './ShopCategory.module.css';
import { ShopContext } from '../../context/ShopContext';
import dropdown_icon from "../../components/Assets/Frontend_Assets/dropdown_icon.png";
import Item from "../../components/items/Item.jsx";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  return (
    <div className={classes.shop_category}>
      <img src={props.banner} alt="banner" />
      
      <div className={classes.shopCategory_indexSort}>
        <p>
          <span>Showing 1-12</span> out of {all_product.length} products
        </p>
        <div className={classes.shopCategory_sort}>
          sort by <img src={dropdown_icon} alt="dropdown icon" />
        </div>
      </div>

      <div className={classes.shopCategory_product}>
        {all_product.map((item, i) => (
          <Item key={i} id={item.id}
                name={item.name}
                image={item.image} 
                />
        ))}
      </div>
      <div className={classes.shopCategory_loadMore}>
          <button>
            Explore More
          </button>
      </div>
    </div>
  );
};

export default ShopCategory;
