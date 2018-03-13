/**
 * socket 客户端
 */
const net = require('net');

const client = net.connect({port:3000},() => {
    client.on('data', chunk => {
        console.log(chunk.toString() + '\n client > ');
    });
    
    process.stdin.on('data',chunk => {
        const result = chunk.toString();
        client.write(`client:${result}`)
    });
});