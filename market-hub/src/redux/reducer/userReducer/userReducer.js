const initialState = {
  currentUser: null
}

export const userReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
         currentUser: action.payload
      }
    case 'SIGN_OUT':
      return {
        ...state,
        currentUser: null
      }
    
    default:
      return state
    }
}