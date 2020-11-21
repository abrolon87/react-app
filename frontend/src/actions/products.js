export const getProducts = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/products')
    .then(resp => resp.json())
    .then(products => dispatch({type: "GET_PRODUCTS", payload: products}))
  }
}

export const addProduct = (product) => {
  return (dispatch) => {
    dispatch({type: "ADDING_PRODUCT"})
    fetch('http://localhost:3001/products', {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then(product => dispatch({type: "PRODUCT_ADDED", payload: product }))
  }
}

export const deleteProduct = (id) => {
  return (dispatch) => {
    dispatch({type: "DELETING_PRODUCT"})
    fetch(`http://localhost:3001/products/${id}`, {
      method: "DELETE",
      
    })
    .then(resp => resp.json())
    .then(() => dispatch({type: "PRODUCT_DELETED", payload: id }))
  }
}