import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiGooglehome, SiAtlassian, SiMaildotcom } from "react-icons/si";
import { BsCollection } from "react-icons/bs";
import { FaRegWindowClose } from "react-icons/fa";

const Navbar = (containerStyles, toggleMenu, menuOpened) => {
  const navItems = [
    { to: "/", label: "Home", icon: <SiGooglehome /> },
    { to: "/collection", label: "Collection", icon: <BsCollection /> },
    { to: "/about", label: "About", icon: <SiAtlassian /> },
    {
      to: "/mailto:support@shoppire.com",
      label: "Contact",
      icon: <SiMaildotcom />,
    },
  ];

  return (
    <nav className={containerStyles}>
      {/* close button inside navbar */}
      {menuOpened && (
        <>
          <FaRegWindowClose onClick={toggleMenu} className="text-2xl" />
          {/* logo */}
          <Link>
            <h4 className="text-secondary">Shoppire</h4>
          </Link>
        </>
      )}
      {navItems.map(({ to, label, icon }) => (
        <div key={label}>
          <NavLink
            to={to}
            className={({ isActive }) =>
              isActive ? "active-link flexCenter gap-x-2" : "flexCenter gap-x-2"
            }
          >
            {icon}
            <h5>{label}</h5>
          </NavLink>
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
