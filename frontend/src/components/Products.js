import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct } from "../actions/productActions";
import VoteButton from "../components/VoteButton"

class Products extends React.Component {

  handleClick = (product) => {
    this.props.deleteProduct(product.id);
  };
  
  render() {
    return (
      
        
      <div>
      {this.props.products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
            <button id={product.id} onClick={() => this.handleClick(product)}>x</button><VoteButton />  
          </li>
        ))}
        </div>
    
    );
    }
};

export default connect(null, { deleteProduct })(Products);
