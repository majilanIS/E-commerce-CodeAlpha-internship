import React, { createContext, useState } from "react";
import all_product from "../components/Assets/Frontend_Assets/all_product"; //b/c this local, when it is fetch with api, it's fetch not import

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

  //to add the item to the cart
  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));
      // console.log(cartItems)
  };

  //to remove the item from cart
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] - 1,
    }));
    };
    
  //for calculate the totalAmount
    const getTotalCartAmount = () => {
    let totalAmount = 0;
    all_product.forEach((item) => {
        if (cartItems[item.id] > 0) {
        totalAmount += item.new_price * cartItems[item.id];
        }
    });
    return totalAmount.toFixed(2);
  };

  //for calculate the totalitems
  const getTotalCartItems = () => {
      let totalItems = 0;
      for (const item in cartItems) {
          if (cartItems[item] > 0) 
              totalItems += cartItems[item];
          }
      return totalItems;
  }

  // const getTotalCartItems = () => {
  //   let total = 0;
  //   all_product.forEach((item) => {
  //   if (cartItems[item] > 0) {
  //     total += cartItems[item]
  //   }
  // })
  //   return total;
  // }

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
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
