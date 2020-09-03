import React from "react";
import PurposesContainer from "../containers/PurposesContainer";

const Product = (props) => {
  let product = props.product;

  //props.products

  return (
    <div id="productcontainer">
      <h2>{product ? product.name : null}</h2>
      <PurposesContainer product={product} />
    </div>
  );
};

export default Product;
