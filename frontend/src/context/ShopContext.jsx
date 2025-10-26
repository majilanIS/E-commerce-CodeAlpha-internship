import React, { createContext, useState, useEffect } from "react";
import all_product from "../components/Assets/Frontend_Assets/all_product";

export const ShopContext = createContext(null);

const ShopDefaultCart = () => {
  const cart = {};
  for (let i = 0; i < all_product.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(ShopDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] > 0 ? prev[itemId] - 1 : 0,
    }));
  };

  const getTotalCartAmount = () => {
    let total = 0;
    all_product.forEach((item) => {
      if (cartItems[item.id] > 0) {
        total += item.new_price * cartItems[item.id];
      }
    });
    return Number(total.toFixed(2));
  };
 
  const getTotalCartItems = () => {
    let TotalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
         TotalItem += cartItems[item]
       }
    }
    return TotalItem;
   }

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
