import React, { Component } from 'react'
import {connect} from 'react-redux'
import { addPurpose } from '../actions/purposes'

class PurposeForm extends Component {
  state = {
    body: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addPurpose(this.state, this.props.product.id)
    this.setState({
      body: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
         <label> Add a purpose for this product here: </label>
          <input type="text" name="body" value={this.state.body} onChange={this.handleChange} />
          <input type="submit" value="Add Purpose" />  
        </form>
      </div>
    )
  }
}

export default connect(null, {addPurpose})(PurposeForm)