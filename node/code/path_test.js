/**
 * path模块测试
 */
const path = require('path');

const test = path.join(__dirname,'01.js');
// path.basename(path[, ext]) 获取文件名
// console.log(path.basename(test))//有后缀的
// console.log(path.basename(test,'.js'))//无后缀的

// path.delimiter 获取不同操作系统中默认的路径分隔符 windows是;(如环境变量中多个路径用;分隔) linux是:
//console.log(path.delimiter);
//获取环境变量
const PATH = process.env.PATH;
//console.log(PATH.split(path.delimiter));


// path.dirname(path) 获取path中的目录

// path.extname(path) 获取扩展名

// path.parse(path) 将一个路径字符串转换为一个对象 包含文件目录 文件名 扩展名等等
const pathObj = path.parse(test);
//console.log(pathObj)

// path.format(pathObject)//将对象路径 转字符串

// path.isAbsolute(path)//判断一个路径是否是绝对路径

// path.join([...paths])//拼接 path

// path.normalize(path)//常规化一个路径  为windows设计
//console.log(path.normalize('c:/dev\\adb//cda///1.txt'));

// path.relative(from, to) //获取从to 到 from的相对路径
// console.log(__dirname);
// console.log(path.relative(__dirname,'E:\\projects\\study\\record\\node\\node.txt'));


// path.resolve([...paths]) //得到一个path 它会自动处理绝对路径 不仅仅是简单的路径拼接

// path.sep//获取当前系统中默认用的路径成员分隔符 windows:\ linux : /

// path.toNamespacedPath(path)

// path.win32 //win32表示windows 不是表示window 32位 它就是一个path对象 允许在任意操作系统上使用windows的方式操作路径

// path.posix //允许在任意操作系统上使用Linux的方式操作路径

//path 会自动根据操作系统选择对应的方式操作路径