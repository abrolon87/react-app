export const getProducts = () => {
  return dispatch => {
    dispatch({type: "LOADING_PRODUCTS"})
    return fetch('http://localhost:3001/products')
    .then(resp => resp.json())
    .then(products => dispatch({type: "PRODUCTS_LOADED", payload: products}))
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