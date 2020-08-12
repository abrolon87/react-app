import React, { Component } from 'react'
import {connect} from 'react-redux'
import { addProduct } from './actions/products'

export default class ProductForm extends Component {
  state = {
    product: {
      name: ""
    },
    loading: false
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default connect(null, {addPRoduct})(ProductForm)