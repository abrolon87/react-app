export const addPurpose = (purpose, productId) => {

  return (dispatch) => {
    fetch(`http://localhost:3000/products/${productId}/purposes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(purpose)
    })
    .then(resp => resp.json())
    .then(product => dispatch({type: 'ADD_PURPOSE', payload: product}))
  }
}

export const deletePurpose = (purposeId, productId) => {

  return (dispatch) => {
    fetch(`http://localhost:3000/products/${productId}/purposes/${purposeId}`, {
      method: 'DELETE'
    })
    .then(resp => resp.json())
    .then(product  => dispatch({type: 'DELETE_PURPOSE', payload: product}))
  }

}