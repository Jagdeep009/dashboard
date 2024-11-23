import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="card text-center" style={{"max-width": "360px"}}>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <Link to="/" className="card-link">Card link</Link>
      </div>
    </div>
  )
}

export default Login