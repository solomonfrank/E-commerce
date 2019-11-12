import { createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger'
import  reducer  from '../reducer/index';
import  { persistStore } from 'redux-persist'

const middleware = [ logger ]

const store = createStore(reducer, applyMiddleware( ...middleware ));

export const persistor = persistStore(store);

export default store;