/**
 * client模块
 */
import React from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import App from './container/App'
import counterApp from './reducers'

//初始state
const preloadedState = window.__INITIAL_STATE__;

//创建store
const store = createStore(counterApp,preloadedState);

render(
  <Provider store="store">
    <App/>
  </Provider>
  ,
  document.getElementById('app')
);

