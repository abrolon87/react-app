import React from 'react'
import {Redirect} from 'react-router-dom'
import PurposesContainer from '../containers/PurposesContainer'

const Product = (props) => {

  console.log(props)
  let product = props.products.filter(product => product.id == props.match.params.id)[0]
  //let product = props.products[props.match.params.id - 1]

  console.log(product)
  
  return (
    <div>
      <h2>
       {product ? product.name : null}
      </h2>
      <PurposesContainer product={product}/>
    </div>
  )
} 

export default Product