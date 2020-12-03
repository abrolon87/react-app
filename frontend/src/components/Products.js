import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct } from "../actions/productActions";

class Products extends React.Component {
  constructor(props) {
  super(props)
    this.state = {
      vote: false
    }
    // this.handleVoteClick = this.handleVoteClick.bind(this)

  }
  
  

  handleVoteClick = () => {
    this.setState({ vote: !this.state.vote })
  }

  handleClick = (product) => {
    this.props.deleteProduct(product.id);
  };
  
  render() {
    return (
      
      <div>
      {this.props.products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
            <button id={product.id} onClick={() => this.handleClick(product)}>
              x
            </button>
      <button id={product.id} onClick={() => this.handleVoteClick(product)}>{this.state.vote ? '0' : '1'}</button>
          </li>
        ))}
        </div>
    
    );
    }
};

export default connect(null, { deleteProduct })(Products);
