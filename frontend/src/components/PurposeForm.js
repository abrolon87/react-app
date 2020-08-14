import React, { Component } from 'react'
import {connect} from 'react-redux'

class PurposeForm extends Component {

  state = {
    body: ''
  }

  render() {
    return (
      <div>
        <form>
         <label> Add a purpose for this product here: </label>
           <input type="text" name="body" value={this.state.body}/>
           <input type="submit" value="Add Purpose" />  
        </form>
      </div>
    )
  }
}

export default connect(null)(PurposeForm)