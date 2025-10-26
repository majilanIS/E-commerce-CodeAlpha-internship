import React, { createContext, useState } from "react";
import all_product from "../components/Assets/Frontend_Assets/all_product"; 
// When you switch to fetching products via API, replace this import with an API call.

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

  // ➕ Add item to cart
  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));
  };

  // ➖ Remove item from cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] > 0 ? prev[itemId] - 1 : 0,
    }));
  };

  // 💰 Calculate total cart amount
  const getTotalCartAmount = () => {
    let total = 0;
    all_product.forEach((item) => {
      if (cartItems[item.id] > 0) {
        total += item.new_price * cartItems[item.id];
      }
    });
    return Number(total.toFixed(2));
  };

  // 🧾 Calculate total items in cart
  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItems += cartItems[item];
      }
    }
    return totalItems;
  };

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
