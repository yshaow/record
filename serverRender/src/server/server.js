/**
 * server模块
 */
import path from 'path'
import Express from 'express'
import handleRender from './handleRender'

const app = Express();
const post = 3000;

//每当收到请求时都会触发handleRender
app.use(handleRender);

//添加监听端口
app.listen(port);

function renderFullPage(html,preloadedState){

}
