import React from 'react'
import LogoImg from '../../public/fav-icon.png'
import './Logo.css'

function Logo() {
  return (
    <div className='Logo'>
      <img src={LogoImg}/>
      Dashion
    </div>
  )
}

export default Logo