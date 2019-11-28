import { createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger'
import  reducer  from '../reducer/index';
import  { persistStore } from 'redux-persist'
import thunk from 'redux-thunk'

const middleware = [ logger, thunk ]

const store = createStore(reducer, applyMiddleware( ...middleware ));

export const persistor = persistStore(store);

export default store;