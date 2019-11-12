const inititalState = {
    isHidden: false
}

export const toggleReducer = (state=inititalState, action) => {
  switch(action.type) {
    case 'TOGGLE_CART':
      return {
        ...state,
        isHidden: !state.isHidden

      }
      default:
        return state;
      
  }

}

