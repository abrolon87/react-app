import React from 'react'
import {Link} from 'react-router-dom'

const Nav = (props) => {
  return (
    <div id="navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand" href="#">Real Remedies</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link to="/products" className="nav-link" href="#">Products</Link>
          <Link to="/products/new" className="nav-link" href="#">Add a Product</Link>
        </div>
      </div>
    </nav>
    </div>
  )
}


export default Nav