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

    case "ADDING_PRODUCT":
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

    case "DELETING_PRODUCT":
      return {
        ...state,
        loading: true
      }
  
    case "PRODUCT_DELETED":
      return {
        ...state,
        products: [...state.products.filter(product => `${product.id}` !== action.payload)],
        loading: false
      }
     
    case "ADD_PURPOSE":
      let products = state.products.map(product => {
          if (product.id === action.payload.id) {
            return action.payload
          } else {
            return product
          }
        })
      return {...state, products: products}
      
    default: 
      return state
  }
}