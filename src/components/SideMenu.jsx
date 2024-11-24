import React from 'react'
import "./SideMenu.css"
import {Logo} from './'
import { NavLink } from 'react-router-dom'
import Dashboard from '../assets/dashboard.png'
import Users from '../assets/users.png'
import Roles from '../assets/roles.png'
import Profile from '../assets/profile.png'
import Logout from '../assets/logout.png'
import { useDispatch } from 'react-redux'
import {logout} from '../store/authSlice'

function SideMenu() {
  const dispatch = useDispatch();

  function logoutUser() {
    dispatch(logout());
  }

  return (
    <div className='SideMenu shadow d-flex flex-column justify-content-between'>
      <div className='d-lg-block d-flex justify-content-between w-100  align-items-center'>
        <Logo />
        <ul className='d-lg-block d-md-flex d-none align-items-center'>
          {/* <li><NavLink to='/'><img src={Dashboard} /> Dashboard</NavLink></li> */}
          <li><NavLink to='/'><img src={Users} /> Users</NavLink></li>
          <li><NavLink to='/role-management'><img src={Roles} /> Role Management</NavLink></li>
          <li><NavLink to='/user-profile'><img src={Profile} /> My Profile</NavLink></li>
          <div className='Logout c-p fw-semibold d-lg-none d-flex' onClick={logoutUser}>
            <img src={Logout} /> <span>Logout</span>
          </div>
        </ul>
        <div className="d-md-none d-flex menu-btn">
          <i class="fa-solid fa-bars"></i>
        </div>
      </div>
      <div className='Logout c-p fw-semibold d-lg-block d-none' onClick={logoutUser}>
        <img src={Logout} /> <span>Logout</span>
      </div>
    </div>
  )
}

export default SideMenu