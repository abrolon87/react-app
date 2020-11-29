import React, { Component } from 'react'
import PurposeForm from '../components/PurposeForm'
import Purposes from '../components/Purposes'

class PurposesContainer extends Component {
  
  render() {
    return (
      <div>        
        <PurposeForm product={this.props.product}/>
        <Purposes purposes={this.props.product && this.props.product.purposes}/>
      </div>
    )
  }
}

export default PurposesContainer