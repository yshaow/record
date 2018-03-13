/**
 * 服务端
 */
const net = require('net');

const clients = [];//保存所有在线的客户端

const broadcast = msg => {
    //给每个在线用户  分发消息
    try {
        clients.forEach( client => {
            client.write(JSON.stringify(msg));
        });
    } catch (error) {
        console.log(error);
        
    }
};

const server = net.createServer(clientSocket => {
    //上线就保存用户
    clients.push(clientSocket);
    broadcast({ from: "system", msg:`欢迎${clientSocket.remoteAddress}进入聊天室！`, protocal: 'broadcast' })

    //监听客户端发送的信息
    clientSocket.on('data', chunk => {
        try {
            const msg = JSON.parse(chunk.toString());
            const protocal = msg.protocal;//获取当前信息的协议
            
            switch (protocal) {
                case 'broadcast':
                    broadcast(msg);//广播协议
                    break;
                default:
                    console.log('搞不懂你想干啥子！');
                    break;
            }

        } catch (error) {
            console.log('出错啦！');
        }
    });
});


const port = 3000;
server.listen(port, err => {
    if (err)
        throw err;

    console.log(`${port}端口启动成功！`);
});

