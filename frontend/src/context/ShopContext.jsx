import React, { createContext, useEffect, useState } from "react";
import { products } from "../assets/data";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const currency = "$";
  const delivery_charges = 10;
  const [cartItems, setCartItems] = useState({});

  // ADDING ITEMS TO CART
  const addToCart = async (itemId, color) => {
    if (!color) {
      toast.error("Please Select the Color First");
      return;
    }
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      if (cartData[itemId][color]) {
        cartData[itemId][color] += 1;
      } else {
        cartData[itemId][color] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][color] = 1;
    }
    setCartItems(cartData);
  };

  // GETING TOTAL CART COUNT
  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalCount;
  };

  // UPDATING THE QUANTITY OF CART ITEMS
  const updateQuantity = async (itemId, color, quantity) => {
    let cartData = structuredClone(cartItems)
    cartData[itemId][color] = quantity
    setCartItems(cartData)
  }

  useEffect(() => {
  }, [cartItems]);

  const value = {
    products,
    search,
    setSearch,
    currency,
    delivery_charges,
    cartItems,
    setCartItems,
    addToCart,
    getCartCount,
    updateQuantity
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
