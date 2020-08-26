import React from 'react'
import PurposesContainer from '../containers/PurposesContainer'

const Product = (props) => {

  console.log(props)
  let product = props.products.filter(product => product.id == props.match.params.id)[0]

  console.log(product)
  
  return (
    <div id="productcontainer">
      <h2>
       {product ? product.name : null}
      </h2>
      <PurposesContainer product={product}/>
    </div>
  )
} 

export default Product