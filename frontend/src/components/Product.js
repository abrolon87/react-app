import React from 'react'


const Product = (props) => {
  console.log(props)
  let product = props.products[props.match.params.id - 1]
  // let product = props.products.filter(product => product.id == props.match.params.id)[0]
  console.log(product)

  return (
    <li>
      {product ? product.name : null}
    </li>
  )
} 

export default Product