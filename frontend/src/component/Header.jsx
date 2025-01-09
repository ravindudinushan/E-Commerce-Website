import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { FaBars } from "react-icons/fa6";
import {} from "react-icons/tb";
import {} from "react-icons/ri";

const Header = () => {
  return (
    <header className="max-padd-container w-full mb-2">
      <div className="flexBetween py-3 bg-primary">
        {/* LOGO */}
        <Link to={"/"} className="flex flex-1 bold-28 bg-red-500">
          Shopanza
        </Link>
        {/* NAVBAR */}
        <div className="flex-1 bg-yellow-500">
          <Navbar />
        </div>
        {/* BUTTONS */}
        <div className="flex flex-1 bg-green-500">
          {/* MENU TOGGEL */}
          <>
            <FaBars />
          </>
          {/* CART */}
          <Link>
            <div>Cart</div>
          </Link>
          {/* USER PROFILE */}
          <button>Login</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
