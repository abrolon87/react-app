import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {getProducts, deleteProduct} from '../actions/products'
import Products from '../components/Products'
import Product from '../components/Product'
import ProductForm from '../components/ProductForm' 
import Nav from '../components/Nav'

class ProductsContainer extends Component {

  componentDidMount() {
    this.props.getProducts()
  }

  render() {
    return (
      <div>
        <Nav/>
        <Switch>
          <Route path='/products/new' component={ProductForm}/>
          <Route path='/products/:id' render={(routerProps) => <Product {...routerProps} products={this.props.products}/>} />
          <Route path='/products' render={(routerProps) => <Products {...routerProps} products={this.props.products}/>} />
        </Switch>
      </div>
    )
  }

  
}

const mapStateToProps = state => {
  return {
    products: state.productReducer.products,
    loading: state.productReducer.loading
  }
}
export default connect(mapStateToProps, {getProducts, deleteProduct})(ProductsContainer);