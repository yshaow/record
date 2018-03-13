/**
 * 以流的形式读取文件
 *  一部分一部分的读取
 */
const fs = require('fs');
const iconv = require('iconv-lite');
const path = require('path');


const filename = path.join(__dirname,'./resource/血染的风采.lrc');

//创建文件流
const stream = fs.createReadStream(filename);

//监听事件
let data = '';
stream
.on('data', chunk => {
    //chunk只是读取到的一部分数据
    data += iconv.decode(chunk,'gbk');
})
.on('end',() => {
    console.log('读取结束！');
    console.log(data);
});

