export const addMultipleItem = (state, item) => {

const foundItem = state.find(cart => cart.id === item.id);

if (foundItem) {
  return state.map(cartItem => {
    if (cartItem.id  === item.id) {
      return {
      ...cartItem, quantity: cartItem.quantity + 1
    }
  } else {
    return cartItem;
  }
  
})
}
return [ ...state, { ...item, quantity: 1}]
}

export const removeSingleItem = (state, item) => {
  const foundItem = state.find(cart => cart.id === item.id);

  if(foundItem.quantity === 1){
    return state.filter(cartItem => cartItem.id !== item.id)
  }

    return state.map(cartItem => (
    cartItem.id === item.id) ? { ...cartItem, quantity: cartItem.quantity - 1} : cartItem)
  }