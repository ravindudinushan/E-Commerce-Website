import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { FaBars, FaBarsStaggered } from "react-icons/fa6";
import {} from "react-icons/tb";
import { RiUserLine } from "react-icons/ri";
import { ShopContext } from "../context/ShopContext";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const {getCartCount} = useContext(ShopContext)

  const toggleMenu = () => setMenuOpened((prev) => !prev);

  return (
    <header className="max-padd-container w-full mb-2">
      <div className="flexBetween py-3">
        {/* LOGO */}
        <Link to={"/"} className="flex flex-1 bold-24 xl:bold-28">
          Shopanza
        </Link>
        {/* NAVBAR */}
        <div className="flex-1">
          <Navbar
            containerStyles={`${
              menuOpened
                ? "flex items-start flex-col gap-y-8 fixed top-16 right-6 p-5 bg-white rounded-xl shadow-md w-52 ring-1 ring-slate-900/5 z-50"
                : "hidden xl:flex gap-x-5 xl:gap-x-7 mesium-15 bg-primary ring-1 ring-slate-900/5 rounded-full p-1"
            }`}
            onClick={() => setMenuOpened(false)}
          />
        </div>
        {/* BUTTONS */}
        <div className="flex flex-1 items-center justify-end gap-x-2 xs:gap-x-8">
          {/* MENU TOGGEL */}
          <>
            {menuOpened ? (
              <FaBarsStaggered
                onClick={toggleMenu}
                className="xl:hidden cursor-pointer text-xl"
              />
            ) : (
              <FaBars
                onClick={toggleMenu}
                className="xl:hidden cursor-pointer text-xl"
              />
            )}
          </>
          {/* CART */}
          <Link to={"/cart"} className="flex relative">
            <div className="ring-1 ring-slate-900 rounded-full px-3 bold-18">
              Cart
              <span className="bg-secondary text-white text-[12px] font-semibold absolute -top-3.5 -right-2 flexCenter w-4 h-4 rounded-full shadow-md">
                {getCartCount()}
              </span>
            </div>
          </Link>
          {/* USER PROFILE */}
          <div className="group relative">
            <button className="btn-dark flexCenter gap-x-2">
              Login
              <RiUserLine className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
