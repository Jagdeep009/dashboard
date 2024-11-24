import React from 'react'
import { NavLink } from 'react-router-dom'
import Users from '../assets/users.png'
import Roles from '../assets/roles.png'
import Profile from '../assets/profile.png'
import Logout from '../assets/logout.png'
import "./MobileMenu.css"

function MobileMenu({action,menutoggle,...rest}) {
  return (
    <>
    <div className='MobileMenu d-md-none d-flex flex-column justify-content-between' {...rest}>
        <ul className='d-flex flex-column gap-4'>
          <li><NavLink to='/'><img src={Users} /> Users</NavLink></li>
          <li><NavLink to='/role-management'><img src={Roles} /> Role Management</NavLink></li>
          <li><NavLink to='/user-profile'><img src={Profile} /> My Profile</NavLink></li>
        </ul>
        <div className='Logout c-p fw-semibold d-lg-none d-flex' onClick={action}>
        <img src={Logout} /> <span>Logout</span>
        </div>
    </div>
    <div className="menu-bg d-md-none" onClick={menutoggle}></div>
    </>
  )
}

export default MobileMenu