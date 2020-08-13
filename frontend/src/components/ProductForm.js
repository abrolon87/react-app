import React, { Component } from 'react'
import {connect} from 'react-redux'
import { addProduct } from '../actions/products'


class ProductForm extends Component {
  state = {
    name: "",
    loading: false
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const product = {name: this.state.name}
    this.props.addProduct(product)
    this.setState({
      name: "",
      loading: false
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" 
          value={this.state.name} 
          onChange={this.handleChange} />
          <input type="submit" value="Add Product" />  
        </form>
      </div>
    )
  }
}

export default connect(null, {addProduct})(ProductForm)