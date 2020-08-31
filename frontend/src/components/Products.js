import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {deleteProduct} from '../actions/products'

const Products = (props) => {
  

  const handleClick = (product) => {
  
    props.deleteProduct(product.id)
  }
  return (
    <div id="productlist">
      {props.products.map(product => 
      <li key={product.id}>
        <Link to={`/products/${product.id}`}>{product.name}</Link>
        <button id={product.id} onClick={() => handleClick(product)}>x</button>
      </li>)}
    </div>
  )
}

export default connect(null, {deleteProduct})(Products)

  
