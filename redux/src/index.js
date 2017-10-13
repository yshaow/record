/**
 * Todo案例
 */
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import todoApp from './stores/reducers'
import App from './containers/App'

let store = createStore(todoApp);
render(
  <Provider store={store}><App/></Provider>,document.getElementById('app')
);

/**
 * Reddit 案例
 */
// import 'babel-polyfill'
// import React from 'react'
// import {render} from 'react-dom'
// import Root from './containers/Root'
//
// render(
//   <Root/>,document.getElementById('app')
// );
