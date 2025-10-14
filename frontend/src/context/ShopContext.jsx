import React, { createContext, useState } from "react";
import all_product from "../components/Assets/Frontend_Assets/all_product";

export const ShopContext = createContext(null);

const ShopDefaultCart = () => {
  const cart = {};
  for (let i = 0; i < all_product.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(ShopDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));
      console.log(cartItems)
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] - 1,
    }));
    };
    
    const getTotalCartAmount = () => {
    let total = 0;
    all_product.forEach((item) => {
        if (cartItems[item.id] > 0) {
        total += item.new_price * cartItems[item.id];
        }
    });
    return total.toFixed(2);
    };


  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
