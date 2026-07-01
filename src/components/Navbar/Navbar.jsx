import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import searchIcon from '../../assets/search_icon.svg'
import bellIcon from '../../assets/bell_icon.svg'
import profileIcon from '../../assets/profile_img.png'
import caret_downIcon from '../../assets/caret_icon.svg'



const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar-left">
            <img src={logo} alt="Logo" />
            <ul>
                <li>Homepage</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>New and Popular</li>
                <li>My List</li>
                <li>Browse by Language</li>
            </ul>
        </div>
        <div className="navbar-right">
            <img src={searchIcon} alt="Icon" className='icons' />
            <p>Children</p>
            <img src={bellIcon} alt="Icon" className='icons' />
            <div className="navbar-profile">
                <img src={profileIcon} alt="Profile" className='profile' />
                <img src={caret_downIcon} alt="Caret Down" />
                <div className='dropdown'>
                    <p>Sign Out of Netflix </p>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar