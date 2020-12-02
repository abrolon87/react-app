import React from 'react'
import {connect} from 'react-redux'
import {deletePurpose} from '../actions/purposeActions'

const Purposes = (props) => {
      
const handleDelete = (purpose) => {
  props.deletePurpose(purpose.id, purpose.product_id)
}
    
  return (
    <div>
      {props.purposes && props.purposes.map(purpose =>   
        <li key={purpose.id}>{purpose.body}<button onClick={() => handleDelete(purpose)}>x</button></li>
      )}
    </div>
  )
  
}

export default connect(null, {deletePurpose})(Purposes)