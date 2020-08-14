import React from 'react'
import Product from './Product'


const Purposes = (props) => {
  
    console.log(props.purposes)
    return (
      <div>
        {/* first time load is undefined, this fixes that */}
        {props.purposes && props.purposes.map(purpose =>   
          <li key={purpose.id}>{purpose.body}<button>x</button></li>
        )}
      </div>
    )
  
}

export default Purposes