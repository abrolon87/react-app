import React, { Component } from 'react'
import {connect} from 'react-redux'
import { addProduct } from '../actions/productActions'


class ProductForm extends Component {
  state = {
    name: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addProduct(this.state)
    this.setState({
      name: ""
    })
    this.props.history.push('/products')
  }

  render() {
    return (
      <div id="productform">
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="name" placeholder="Enter product name"
          value={this.state.name} 
          onChange={this.handleChange} /><br/>
          <input type="submit" value="Add Product" />  
        </form>
      </div>
    )
  }
}

export default connect(null, {addProduct})(ProductForm)

