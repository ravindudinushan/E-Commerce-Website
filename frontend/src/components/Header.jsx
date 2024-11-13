import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { FaBarsStaggered , FaRegCircleUser } from "react-icons/fa6"
import {GiBeachBag} from "react-icons/gi"
import {TbArrowNarrowRight} from "react-icons/tb"
import {FaSearch} from "react-icons/fa"

const Header = () => {

  const [menuOpened, setMenuOpened] = useState(false)

  return (
    <header className="py-5 w-full bg-white">
      <div className="max-padd-container flexBetween">
        {/* logo */}
        <Link to={"/"} className="">
          <h4>Shoppire</h4>
        </Link>

        {/* Navbar */}
        <Link>
          <Navbar />
        </Link>

        {/* logo */}
        <Link to={"/"} className="">
          <h4>Shoppire</h4>
        </Link>

        {/* right side */}
        <div>
          {!menuOpened && (
            <FaBarsStaggered />
          )}
          <div>
            <FaSearch />
          </div>
          <Link>
            <GiBeachBag />
            <span>0</span>
          </Link>

          <div>
            <div>
              <FaRegCircleUser />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
