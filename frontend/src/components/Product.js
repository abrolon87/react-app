import React from "react";
import PurposesContainer from "../containers/PurposesContainer";

const Product = (props) => {
  
  //let product = props.products[props.match.params.id - 1]
  let product = props.products.filter(product => product.id == props.match.params.id)[0]

  return (
    
    <div>

      <h2>Things you can do with {product ? product.name : null}</h2>
    
      <PurposesContainer product={product} />
    </div>
  );
};

export default Product;
