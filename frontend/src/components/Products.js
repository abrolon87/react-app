import React from 'react'
import {Route, Link} from 'react-router-dom'
import Product from './Product'

const Products = (props) => {
  
  return (
    <div>
      {props.products.map(product => 
      <li key={product.id}>
        <Link to={`/products/${product.id}`}>{product.name}</Link>
        {/* <button id={product.id} >X</button>  */}
      </li>)}
    </div>
  )
}

export default Products
  //   
  // const products = this.props.products.map((product, i) => <li key={i}>{product.name}
  //   <button id={product.id} onClick={this.handleClick} >X</button>
  //   </li>)  //add a tag later 
  //   return (
  //     <div>
  //       <h1>Click on a Product to see its uses:</h1>
  //       <ul>
  //         {this.props.loading ? <h3>Loading...</h3> : products}
  //       </ul>
        
  //     </div>
  //   )
    
  
