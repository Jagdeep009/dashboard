import React from 'react'
import "./MainHeading.css"

function MainHeading({heading,tagline}) {
  return (
    <div className='MainHeading'>
        <h1>{heading}</h1>
        <span>{tagline}</span>
    </div>
  )
}

export default MainHeading