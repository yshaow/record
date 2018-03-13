/**
 * 创建多级目录模块
 */
const fs = require('fs');
const path = require('path');

function mkdirs(pathname,callback = err => {if(err) throw err;}){

    //获取导入该模块的目录路径
    let parentDir = path.dirname(module.parent.filename);

    //处理相对路径
    if(!path.isAbsolute(pathname)) 
        pathname = path.join(parentDir,pathname);

    //获取需要创建的目录
    const relativepath = path.relative(parentDir,pathname);
    const folders = relativepath.split(path.sep);

    try {
        folders.forEach( folder => { 
            parentDir = path.join(parentDir,folder);
            try {
                fs.statSync(parentDir);//检查目录是否存在 不存在报错
            } catch (error) {//不存在 创建
                fs.mkdirSync(parentDir);
            }
        });
        callback(null);
    } catch (error) {
        callback(error);
    }
    
}

module.exports = mkdirs;