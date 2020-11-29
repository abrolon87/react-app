import React from 'react'
import { connect } from 'react-redux'
import { deletePurpose } from "../actions/purposeActions";

const Purpose = ({purpose, deletePurpose }) => {
  console.log(purpose)
    
  const handleDelete = (purpose) => {
    
    purpose.deletePurpose(purpose.id, purpose.product_id);
  };

  return (
    <div>
      
      (
            <li key={purpose.id}>
              {purpose.body}
              <button onClick={() => handleDelete(purpose)}>x</button>
              
            </li>
          )
    </div>
  )
}

export default connect(null, { deletePurpose })(Purpose)
