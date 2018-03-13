/**
 * 建立一个socket服务端
 *  客户端与服务端建立的连接  称为socket
 * 
 *  nodemon 安装：npm install -g nodemon 它自动重启某个功能js 当该js改变之后
 */
const net = require('net');

//创建一个socket服务
const server = net.createServer(serverConnectHandler);

//请求处理函数
function serverConnectHandler(socket){
    
    //获取服务ip
    const sv = socket.address();
    //console.log('服务ip：'+sv.address+':'+ sv.port);

    //获取远端客户端ip
   // console.log('远端来了：'+socket.remoteAddress + ':' + socket.remotePort);

   socket.write(`欢迎入坑：${socket.remoteAddress}:${socket.remotePort}`);
    
    //获取客户端发送的信息 -- 输入的任何信息都将接收到
    socket.on('data', chunk => {//chunk buffer对象
        console.log(chunk.toString());
    });
    
}

//监听一个端口
const port = 3000; //端口如果给0  node会自动随机分配端口
server.listen(port, err => {
    if(err)//如果端口被占用  会报错
        throw err;
    
    console.log(`${port}端口监听成功！`);
});

/**
 * 测试  
 *  方式1：浏览器http://localhost:3000/
 *  方式2：启动windows下的 telnet 然后在命令行中执行 telnet 127.0.0.1 3000
 */