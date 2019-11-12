import { addMultipleItem, removeSingleItem  } from '../../helper/utils'

const initialState = {
  cart: [],
 
}

export const cartReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        cart: addMultipleItem(state.cart, action.payload)
      }
    case 'REMOVE_ITEM':
      return {
        ...state,
        cart: state.cart.filter( item => item !== action.payload)
      }
    case 'REMOVE_SINGLE':
      return {
       ...state,
       cart: removeSingleItem(state.cart, action.payload)
      }
     
    default:
      return state
  }
}