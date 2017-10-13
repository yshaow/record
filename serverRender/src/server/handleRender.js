/**
 * handleRender模块
 *  处理请求
 */
import {createStore} from 'redux'
import counterApp from './reducers'
import {renderToString} from 'react-dom/server'
import {Provider} from 'react-redux'
import App from './containers/App'
import renderFullPage from './renderFullPage'
import React from 'react'
import qs from 'qs'//添加文件开头
import {fetchCounter} from './api/counter'

/**
 * 静态的
 * @param req
 * @param res
 */
export default function handleRender(req,res){
  //创建Redux store实例
  const store = createStore(counterApp);

  //把组件渲染成字符串
  const html = renderToString(
    <Provider store={store}>
      <App/>
    </Provider>
  );

  //从store中获取初始state
  const preloadedState = store.getState();

  //把渲染后的页面内容发送给客户端
  res.send(renderFullPage(html,preloadedState));
}

/**
 * 基于请求参数获取初始state
 * @param req
 * @param res
 */
export default function handleRender(req,res){
  const params = qs.parse(req.query);
  const counter = parseInt(params.counter) || 0;

  //得到初始state
  let preloadedState = {counter}
  //创建Redux store实例
  const store = createStore(counterApp,preloadedState);

  //把组件渲染成字符串
  const html = renderToString(
    <Provider store={store}>
      <App/>
    </Provider>
  );

  //从Redux store 得到初始state
  const finalState = store.getState()
  //把渲染后的页面内容发送给客户端
  res.send(renderFullPage(html,finalState));
}

/**
 * 异步state
 */
function handleRender(req, res) {
  // 异步请求模拟的 API
  fetchCounter(apiResult => {
    // 如果存在的话，从 request 读取 counter
    const params = qs.parse(req.query)
    const counter = parseInt(params.counter) || apiResult || 0

    // 得到初始 state
    let preloadedState = { counter }

    // 创建新的 Redux store 实例
    const store = createStore(counterApp, preloadedState)

    // 把组件渲染成字符串
    const html = renderToString(
      <Provider store={store}>
        <App />
      </Provider>
    )

    // 从 Redux store 得到初始 state
    const finalState = store.getState()

    // 把渲染后的页面发给客户端
    res.send(renderFullPage(html, finalState))
  });
}

