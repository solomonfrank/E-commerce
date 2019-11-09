import { combineReducers } from 'redux';
import { userReducer } from '../reducer/userReducer/userReducer'

export const reducer = combineReducers({
    user: userReducer()
})

