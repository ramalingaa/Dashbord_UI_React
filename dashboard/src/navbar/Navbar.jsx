import React from 'react'
import Logo from './logo/Logo';
import Navlinks from './navlinks/Navlinks';
import UserProfile from './userprofile/UserProfile';
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className='nav-container'>
      <Logo />
      <Navlinks />  
      <UserProfile />
    </div>
  )
}

export default Navbar