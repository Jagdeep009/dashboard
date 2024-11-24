import React from 'react'
import { Link } from 'react-router-dom'
import { Logo, MainHeading } from "./"

function Login() {
  return (
    <div className="card text-center rounded shadow" style={{"max-width": "360px"}}>
      <div className="card-body">
        <Logo className="d-flex justify-content-center my-4"/>
        <h4 className="card-subtitle mb-2 text-body-secondary fw-semibold mb-3">Login</h4>
        <p className="card-text">Please refresh the page to return to the Dashboard.</p>

        <p className='text-danger'>You can try accessing the dashboard route after logging out using the URL below.</p>
        <Link to="/" className="card-link">Users Dashboard</Link>
        <br />
        <Link to="/role-management" className="card-link">Role Management</Link>
        <br />
        <Link to="/user-profile" className="card-link">My Profile</Link>
      </div>
    </div>
  )
}

export default Login
