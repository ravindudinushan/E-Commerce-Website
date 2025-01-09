import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { FaBars } from "react-icons/fa6";
import {} from "react-icons/tb";
import {} from "react-icons/ri";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(true)

  return (
    <header className="max-padd-container w-full mb-2">
      <div className="flexBetween py-3">
        {/* LOGO */}
        <Link to={"/"} className="flex flex-1 bold-28">
          Shopanza
        </Link>
        {/* NAVBAR */}
        <div className="flex-1">
          <Navbar containerStyles={`${menuOpened ? "flex items-start flex-col gap-y-8 fixed top-16 right-6 p-5 bg-white rounded-xl shadow-md w-52 ring-1 ring-slate-900/5 z-50" : 
            "hidden xl:flex gap-x-5 xl:gap-x-7 mesium-15 bg-primary ring-1 ring-slate-900/5 rounded-full p-1"}`} />
        </div>
        {/* BUTTONS */}
        <div className="flex flex-1 items-center justify-end gap-x-2 xs:gap-x-8">
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
