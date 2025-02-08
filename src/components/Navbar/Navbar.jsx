import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
function Navbar() {
    return (
        <div className='navbar'>
            <div className="navbar-left">
                <img src={logo} alt="" />
                <ul>
                    <li>Home</li>
                    <li>Tv Show</li>
                    <li>Movies</li>
                    <li>New $ Popular</li>
                    <li>My List</li>
                    <li>Browse By Languages</li>


                </ul>



            </div>
            <div className="navbar-right">
                <img src={search_icon} alt="" className='icons' />
                <p>Children</p>
                <img src={bell_icon} alt="" className='icons' />
                <div className="navbar-profile">
                    <img src={profile_img} alt="" className='profile' />
                    <img src={caret_icon} alt="" className='profile' />
                    <div className="dropdown">
                        <p>Sign Out of Netflix</p>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Navbar
