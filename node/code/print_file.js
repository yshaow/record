/**
 * 打印目标目录的 文件列表信息
 */

 const fs = require('fs');
 const path = require('path');
 require('./util/date.js');

 //是否传入了目标目录 没有则使用当前目录
 const target = path.join(__dirname,process.argv[2] || './');

 //获取当前目录下的文件列表
fs.readdir(target,(err,files) => {
    if(err)
        throw err;
    
    //files文件名

    //获取文件信息
    files.forEach( file => {

        fs.stat(path.join(target,file),(err,state) => {
            if(err)
                throw err;
            
            console.log(`
                ${state.mtime.format('yyyy/MM/dd HH:mm')}\t${state.size}\t${file}
            `);
        });
    });
    
});
 