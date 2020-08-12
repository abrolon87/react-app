export default (state = {products: [], loading: false}, action) => {
  switch(action.type){
    case "LOADING_PRODUCTS":
      return {
        ...state, 
        loading: true
      }

    case "PRODUCTS_LOADED":
      return {
        ...state, 
        products: action.payload,
        loading: false
      }

    case "ADDING_PRODUCTS":
      return {
        ...state,
        loading: true
      }

    case "PRODUCT_ADDED":
      return {
        ...state,
        products: [...state.products, action.payload],
        loading: false
      }

    default: 
      return state
  }
}