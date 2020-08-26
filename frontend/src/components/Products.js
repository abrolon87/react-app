import React from 'react'
import {Link} from 'react-router-dom'

const Products = (props) => {
  
  return (
    <div id="productlist">
      {props.products.map(product => 
      <li key={product.id}>
        <Link to={`/products/${product.id}`}>{product.name}</Link>
      </li>)}
    </div>
  )
}

export default Products
  
    
  
