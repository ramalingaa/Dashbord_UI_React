import React from 'react'
import NavLinks from "./local.json"
import "./Navlinks.css"
const Navlinks = () => {
  return (
    <div className='flex navlinks-container'>
        {
            NavLinks.NavLinks.map((navLink) => {
               return <p key = {navLink}>{navLink}</p>
            })
        }
    </div>
  )
}

export default Navlinks