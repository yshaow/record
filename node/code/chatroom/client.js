/**
 * 客户端
 */
const net = require('net');
const readline = require('readline');
//创建readline 
const rl = readline.createInterface(process.stdin, process.stdout);

//用户输入名字
rl.question(`what's your name ?`, name => {
    name = name.trim();

    if (!name)
        throw new Error('您的名字呢？');

    //连接服务
    const server = net.connect({ port: 3000 }, () => {
        
    });

    //设置命令行前缀
    rl.setPrompt(`${name} > `);

    //输出命令行前缀
    rl.prompt();

    rl.on('line', chunk => {
        chunk = chunk.toString().trim();

        const send = { from: name, msg: chunk, protocal: 'broadcast' };

        server.write(JSON.stringify(send));
    });

    //监听服务
    server.on('data', chunk => {
        try {
            chunk = JSON.parse(chunk.toString().trim());
            const send = { from: name, msg: chunk, protocal: 'boardcast' };
            switch (chunk.protocal) {
                case 'broadcast':
                    console.log(`\nboardcast > from ${chunk.from} : ${chunk.msg}`);
                    rl.prompt();
                    break;
                default:
                    server.write('搞不懂你想干啥子！');
                    break;
            }
        } catch (error) {
             server.write('出错啦！');
        }

    });
});