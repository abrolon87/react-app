import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import {getProducts, deleteProduct} from '../actions/products'
import Products from '../components/Products'
import Product from '../components/Product'
import ProductForm from '../components/ProductForm' 


class ProductsContainer extends Component {

  componentDidMount() {
    this.props.getProducts()
  }

  handleClick = (event) => {
    this.props.deleteProduct(event.target.id)
  }
 
  render() {
    return (
      <div>
        <Route path='/products/new' component={ProductForm}/>
        <Route path='/products/:id'render={(routerProps) => <Product {...routerProps} products={this.props.products}/>} />
        <Route exact path='/products' render={(routerProps) => <Products {...routerProps} products={this.props.products}/>} />
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