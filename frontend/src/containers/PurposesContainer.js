import React, { Component } from 'react'
import PurposeForm from '../components/PurposeForm'
import Purposes from '../components/Purposes'

class PurposesContainer extends Component {
  render() {
    return (
      <div>        
        <PurposeForm />
        <Purposes />
      </div>
    )
  }
}

export default  PurposesContainer