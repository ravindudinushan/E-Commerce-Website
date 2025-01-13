import React, { createContext } from "react";
import { products } from "../assets/data";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const value = { products };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
