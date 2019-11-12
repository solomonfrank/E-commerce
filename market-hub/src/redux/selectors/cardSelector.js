import { createSelector } from 'reselect';

//input selector

const selectCart = state => state.cart


// output selector

export const selectCartItem = createSelector(
  [selectCart],
  carts => carts.cart
)
 
export const selectCartCount = createSelector(
selectCartItem,
  carts => carts.reduce(( sum, currItem) => sum + currItem.quantity, 0) 
)

export const selectCartTotal = createSelector(
  selectCartItem,
  carts => carts.reduce(( sum, currItem) => sum + currItem.quantity * currItem.price, 0) 
)