import './App.css'
import { Outlet } from 'react-router-dom'
import SideMenu from './components/SideMenu'
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'


function App() {
  const status = useSelector((state)=> state.auth.status)
  
  return (
    <div className='d-flex App'>
      {status && <SideMenu />}
      <Outlet />
    </div>
  )
}

export default App

