import { createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger'
import  { reducer } from '../reducer/index';

const middleware = [ logger ]

const store = createStore(reducer, applyMiddleware( ...middleware ));

export default store;