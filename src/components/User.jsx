import React from 'react'
import { useSelector } from 'react-redux'

function User() {
    const userData = useSelector((state) => state.auth.userData);
  return (
    <div className='User text-capitalize d-sm-block d-none'>
        {/* <img src={userData.profile} alt=""  className='me-2'/> */}
        <span>{userData.name}</span>
    </div>
  )
}

export default User