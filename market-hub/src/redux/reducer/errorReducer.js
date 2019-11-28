
const initialState = '';
const errorReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SIGNUP_ERROR':
      return {
          ...state,
          error: action.payload
      }
  default: 
    return state
  }
}

export default errorReducer;
