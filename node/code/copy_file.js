/**
 * 文件的拷贝
 * 
 *  如果直接使用readFile和writeFile实现文件的拷贝有如下问题：
 *   》大文件 会很耗内存
 *   》无法知道当前拷贝文件的进度
 *  使用文件流的方式解决上面问题
 */
const fs = require('fs');
const path = require('path');

//创建一个读取流 从硬盘到内存的流 开始了读取文件的任务
const readFilePath = path.join(__dirname, './resource/test.avi');
const readerStream = fs.createReadStream(readFilePath);
//创建一个写入流 从内存到硬盘的流
const writeStream = fs.createWriteStream(path.join(__dirname, './resource/test1.avi'));

fs.stat(readFilePath, (err, stat) => {
    if (err)
        throw err;


    //监听data事件 获取读取的内容 一部分一部分的读取 -- 减少内存消耗
    let totalSize = 0;
    readerStream.on('data', chunk => {//chunk 是Buffer对象(字节数组) 通过length属性可以拿到当前读取的大小  单位 字节
        totalSize += chunk.length;
        //获取文件的进度
        const readProcess = totalSize * 100 / stat.size + '%';

        //写入硬盘
        writeStream.write(chunk, err => {
            if (err)
                throw err;
            
            console.log(`写入进度：${readProcess}`);
        });

    }).on('end', () => {
        console.log('读取结束！');
    });
});