/**
 * 通过pipe实现  文件拷贝
 * 
 * pipe 函数 是 把读取流写入到写入流中 
 */

const fs = require('fs');
const path = require('path');


//定义读取流
const readFilePath = path.join(__dirname, './resource/test.avi')
const readStream = fs.createReadStream(readFilePath);
//定义写入流
const writeStream = fs.createWriteStream(path.join(__dirname, './resource/test3.avi'));

fs.stat(readFilePath, (err, stat) => {
    if (err)
        throw err;
    
    
    let totalSize = 0;
    //获取进度
    writeStream.on('pipe', readStream => {
        readStream.on('data', chunk => {
           
            totalSize += chunk.length;
            //进度
            const readProcess = totalSize * 100 / stat.size + '%';
    
            console.log('pipe:'+readProcess);
        });
        
    });
    
    //把readStream 写入到 writeStream -- 实现拷贝
    readStream.pipe(writeStream);
    
});
