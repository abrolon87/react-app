import React from 'react'
import {connect} from 'react-redux'
import {getProducts, deleteProduct} from '../actions/products'
import ProductForm from '../components/ProductForm' 
import Products from '../components/Products'

class ProductsContainer extends React.Component {

  componentDidMount() {
    this.props.getProducts()
  }

  handleClick = (event) => {
    this.props.deleteProduct(event.target.id)
  }

  render() {
    return (
      <div>
        <ProductForm />
        <Products />
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