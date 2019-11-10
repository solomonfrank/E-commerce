import { combineReducers } from 'redux';
import { userReducer } from '../reducer/userReducer/userReducer'
import { cartReducer } from '../reducer/cartReducer/cartReducer'

export const reducer = combineReducers({
    user: userReducer,
    cart: cartReducer
})

