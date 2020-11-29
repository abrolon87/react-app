export const getProducts = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/products')
    .then(resp => resp.json())
    .then(products => dispatch({type: "GET_PRODUCTS", payload: products}))
  }
}

export const addProduct = (product) => {
  return (dispatch) => {
    fetch('http://localhost:3000/products', {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(product => dispatch({type: "ADD_PRODUCT", payload: product }))
  }
}

export const deleteProduct = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",  
    })
    .then(resp => resp.json())
    .then(() => dispatch({type: "DELETE_PRODUCT", payload: id }))
  }
}