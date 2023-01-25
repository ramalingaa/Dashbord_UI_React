import React from 'react'
import "./UserProfile.css"
const UserProfile = () => {
  return (
    <div className='flex userProfile-container'>
        <div >
            <i class="fas fa-bell"></i>
            <span className='notification-icon'></span>
        </div>
        <img src = "https://avatars.githubusercontent.com/u/87629304?s=48&v=4" alt = "user profile" className='avatar'/>
        <div className='flex username-container'>
            <p>Mario</p>
            <i class="fas fa-chevron-down"></i>
        </div>
    </div>
  )
}

export default UserProfile