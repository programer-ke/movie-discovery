import "../css/Navbar.css"
import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/logo.png";


function NavBar() {
  return (
    <nav className='navbar'>
      <div className="navbarBrand">
        <Link to='/'><img src={logo} alt="Logo" className="logo"/></Link>
      </div>
      <div className="navbarLinks">
        <Link to='/' className='navLink'>Home</Link>
        <Link to='/favourites' className='navLink'>Favourites</Link>
      </div>
    </nav>
  )
}

export default NavBar
