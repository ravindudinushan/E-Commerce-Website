import React from 'react'
import { FaRegWindowClose } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { SiGooglehome, SiAtlassian, SiMaildotcom  } from 'react-icons/si'
import { BsCollection } from 'react-icons/bs'
import { FaRegWindowClose } from 'react-icons/fa'

const Navbar = (containerStyles, toggleMenu, menuOpened) => {

  const navItems = [
    {to: "/", label: "Home", icon: <SiGooglehome />},
    {to: "/collection", label: "Collection", icon: <BsCollection />},
    {to: "/about", label: "About", icon: <SiAtlassian />},
    {to: "/mailto:support@shoppire.com", label: "Contact", icon: <SiMaildotcom />},
  ]

  return (
    <nav>
      {/* close button inside navbar */}
      {menuOpened && (
        <>
          <FaRegWindowClose onClick={toggleMenu} className='text-2xl' />
          {/* logo */}
          <Link>
            <h4 className='text-secondary'>Shoppire</h4>
          </Link>
        </>
      )}
      {navItems}
    </nav>
  )
}

export default Navbar
