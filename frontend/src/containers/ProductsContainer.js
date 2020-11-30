import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { getProducts, deleteProduct } from "../actions/productActions";
import Products from "../components/Products";
import Product from "../components/Product";
import ProductForm from "../components/ProductForm";

class ProductsContainer extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path="/products/new" component={ProductForm} />
          <Route path="/products/:id" render={(routerProps) => <Product {...routerProps} products={this.props.products}/>}/>
          <Route path="/products" render={(routerProps) => (
              <Products {...routerProps} products={this.props.products} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  
  return {
    products: state.products
  };
};

export default connect(mapStateToProps, { getProducts, deleteProduct })(
  ProductsContainer
);
// connect dispatches action to reducer