/**
 * 文件写入
 */
const fs = require('fs');
const path = require('path');

/****************默认会覆盖文件内容**************** */

//异步写入
// fs.writeFile(path.join(__dirname,'./resource/a.txt'),{id:10}, err => {
//     if(err)//不会自动创建文件夹  所以如果文件夹不存在 可能会出错
//         console.log('error!');
//     else
//         console.log('success!');
// });

//同步写入
//fs.writeFileSync

//以流的形式写入
// const stream = fs.createWriteStream(path.join(__dirname,'./resource/a.txt'));
// stream.write('hello world!');

/****************追加文件内容**************** */
//fs.appendFile
//fs.appendFileSync