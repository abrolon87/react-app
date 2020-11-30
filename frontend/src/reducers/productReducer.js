export default function (state = {products: []}, action) {
  
  switch(action.type){
    
    case "GET_PRODUCTS":
      return {
        state,
        products: action.payload
      }

    case "ADD_PRODUCT":
      return {
        ...state,
        products: [...state.products, action.payload]
      }

    case "DELETE_PRODUCT":
      return {
        ...state,
        products: [...state.products.filter(product => product.id !== action.payload)]
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
    
    case "DELETE_PURPOSE":
      let purposeProducts = state.products.map(product => {
        if (product.id === action.payload.id) {
          return action.payload
        } else {
          return product
        }
      })
      return {...state, 
        products: purposeProducts
      }

    default: 
      return state
  }
}