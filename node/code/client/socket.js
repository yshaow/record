/**
 * 建立socket客户端
 */

 const net = require('net');

 const socket = net.connect({port:3000},() => {
     console.log('客户端发起连接！');
     socket.write('hello，服务端！');
 });

 socket.on('data', chunk => {
    console.log('服务你是sb！');
    
    //断开连接
    //socket.end();
 }).on('end', () => {
     console.log('服务断开！');
 });