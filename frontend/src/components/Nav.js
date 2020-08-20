import React from 'react'
import {Link} from 'react-router-dom'

const Nav = (props) => {
  return (
    <div className="navbar">
      <Link to='/products' style={{paddingRight: '10px'}}><h2>Products</h2></Link>
      <Link to='/products/new'> <h2>Add Product </h2></Link>
    </div>
  )
}


export default Nav