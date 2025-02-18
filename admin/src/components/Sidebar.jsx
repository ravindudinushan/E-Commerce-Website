import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaSquarePlus } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className="max-sm:flexCenter max-sm:pd-3 rounded bg-white pb-3 sm:w-1/5 sm:min-h-screen ">
      <div className="flex flex-col gap-y-6 max-sm:items-center sm:flex-col pt-4 sm:pt-14">
        {/* LOGO */}
        <Link to={"/"} className="bold-22 xl:bold-32 sm:pl-2 lg:pl-12">
          Shopanza
        </Link>
        {/* LINKS */}
        <div className="flex sm:flex-col gap-x-5 gap-y-8 sm:pt-10">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "active-link"
                : "flexStart gap-x-2 sm:pl-12 p-5 medium-15 cursor-pointer h-10 rounded-xl"
            }
          >
            <FaSquarePlus />
            <div className="hidden lg:flex">Add Item</div>
          </NavLink>
          <NavLink
            to={"/list"}
            className={({ isActive }) =>
              isActive
                ? "active-link"
                : "flexStart gap-x-2 sm:pl-12 p-5 medium-15 cursor-pointer h-10 rounded-xl"
            }
          >
            <FaSquarePlus />
            <div className="hidden lg:flex">List</div>
          </NavLink>
          <NavLink
            to={"/orders"}
            className={({ isActive }) =>
              isActive
                ? "active-link"
                : "flexStart gap-x-2 sm:pl-12 p-5 medium-15 cursor-pointer h-10 rounded-xl"
            }
          >
            <FaSquarePlus />
            <div className="hidden lg:flex">Orders</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
