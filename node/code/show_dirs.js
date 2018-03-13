/**
 * 递归目录结构
 */

 const fs = require('fs');
 const path = require('path');

 const target = path.join(__dirname,process.argv[2] || './');

 function load(target,deep){
     //给对应深度加上 ┃ 
     const prefix = new Array(deep + 1).join('┃ ');
     
    //获取文件列表
    const fileOrDirs = fs.readdirSync(target);
    let dirs = [];
    let files = [];

    fileOrDirs.forEach( fileOrDir => {
        const stats = fs.statSync(path.join(target,fileOrDir));

        stats.isFile() ? files.push(fileOrDir) : dirs.push(fileOrDir);
    });

    //根据ascii码排序
    dirs.sort();
    files.sort();

    //打印┣┗━┃
    dirs.forEach( dir => {
        console.log(`${prefix}┣━${dir}`);
        load(path.join(target,dir),deep + 1);
    })
    let count = files.length - 1;
    files.forEach( file => {
        console.log(`${prefix}${count-- ? '┣' : '┗'}━${file}`);
    })
 }

 load(target,0);
 