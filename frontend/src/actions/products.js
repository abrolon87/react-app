export const getProducts = () => {
  return dispatch => {
    dispatch({type: "LOADING_PRODUCTS"})
    return fetch('http://localhost:3001/products')
    .then(resp => resp.json())
    .then(products => dispatch({type: "PRODUCTS_LOADED", payload: products}))
  }
}