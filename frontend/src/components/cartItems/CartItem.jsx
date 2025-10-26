import React, { useContext } from 'react';
import classes from './CartItem.module.css';
import remove_icon from '../../components/Assets/Frontend_Assets/cart_cross_icon.png';
import { ShopContext } from '../../context/ShopContext';

const CartItem = () => {
  const { all_product, getTotalCartItems, addToCart, removeFromCart, getTotalCartAmount, cartItems } = useContext(ShopContext);

  return (
    <div className={classes.cartItems}>
      {/* 🛒 Header row */}
      <div className={classes.cartItemsFormatMain}>
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {/* 🧾 Cart items list */}
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id} className={classes.cartItemsFormat}>
              <img src={e.image} alt={e.name} className={classes.cartItemImage} />
              <p>{e.name}</p>
              <p>${e.new_price}</p>

              <div className={classes.cartItemQuantity}>
                <button onClick={() => removeFromCart(e.id)}>-</button>
                <span>{cartItems[e.id]}</span>
                <button onClick={() => addToCart(e.id)}>+</button>
              </div>

              <p>${(e.new_price * cartItems[e.id]).toFixed(2)}</p>

              <img
                src={remove_icon}
                alt="remove item"
                className={classes.removeIcon}
                onClick={() => removeFromCart(e.id)}
              />
            </div>
          );
        }
        return null;
      })}

      {/* 🧮 Cart totals and promo code */}
      <div className={classes.cartItemsDown}>
        <div className={classes.cartItemsTotal}>
          <h1>Cart Totals</h1>
          <div>
            <div className={classes.cartItemsTotalItem}>
              <p>Subtotal</p>
              <p>${getTotalCartItems()}</p>
            </div>
            <hr />
            <div className={classes.cartItemsTotalItem}>
              <p>Shipping</p>
              <p>Free</p>
            </div>
            <hr />
            <div className={classes.cartItemsTotalItem}>
              <p>Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>

        <div className={classes.cartItemsPromoCode}>
          <p>If you have a promo code, enter it here:</p>
          <div className={classes.cartItemsPromoBox}>
            <input type="text" placeholder="Promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
