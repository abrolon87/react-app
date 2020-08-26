import React from 'react'
import {Link} from 'react-router-dom'

const Nav = (props) => {
  return (
    <div id="navbar">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" class="navbar-brand" href="#">Real Remedies</Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <Link to="/products" class="nav-link" href="#">Products</Link>
          <Link to="/products/new" class="nav-link" href="#">Add a Product</Link>
        </div>
      </div>
    </nav>
    </div>
  )
}


export default Nav