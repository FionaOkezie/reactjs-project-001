import React from 'react'
import './UserProfileCard.css'
import profile_icon from '../Assets/Headshot.jpg'

const UserProfileCard = () => {
  return (
    <div className='cardbody'>
        <div className='gradiant'></div>
        <div className='profile-down'>
            <img src= {profile_icon} alt="" />
            <div className='profile-title'>Adaugo Okezie</div>
            <div className='profile-description'>
            A reliable professional who is resourceful, diligent, and dedicated in the workplace. 
            Having a strong interest in computer and technology-related fields such as Software Engineering, Networks, data communication, and Cybersecurity. 
            I strategically endeavor to reach and sustain corporate goals with a dedication to excellence and integrity by being diligent, utilizing my experience, and collaborating with others.
            </div>
            <div className='profile-button'><a href="mailto:fiona.okezie@outlook.com">Contact Me</a></div>
        </div>

    </div>
  )
}

export default UserProfileCard


