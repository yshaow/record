/**
 * socket服务端
 */
const net = require('net');

const server = net.createServer(socket => {

    //获取客户端的内容
    socket.on('data' , chunk => {
        console.log(`【${socket.remoteAddress}】：${chunk.toString()} \n server > `);
    });


    //监听控制台输入
    process.stdin.on('data',chunk => {
        socket.write(`server：${chunk.toString()}`)
    });
});

const port = 3000;
server.listen(port, err => {
    if (err)
        throw err;
    
    console.log(`${port}端口启动！`);
})