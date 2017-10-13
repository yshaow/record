/**
 * store
 */
import {createStore,applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
//import logger from 'redux-logger'
import rootReducer from './reducersReddit'

//const loggerMiddleware = logger();

export default function configureStore(preloadedState){
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunkMiddleware)
  );
}

