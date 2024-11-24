import React from 'react'
import LogoImg from '../assets/fav-icon.png'
import './Logo.css'

function Logo({ className, ...rest }) {
  const combinedClassName = className ? `Logo ${className}` : 'Logo';

  return (
    <div className={combinedClassName} {...rest}>
      <img src={LogoImg} alt="Logo" />
      Dashion
    </div>
  );
}

export default Logo;
