/**
 * 实现 require函数
 * 
 * @param id 表示模块id 即模块路径
 */

 const $require = id => {
    
    //获取需要请求的文件的全路径
    const path = require('path');
    const filename = path.join(__dirname,id);//__dirname 当前文件所在的目录
    //获取需要请求的文件的目录
    const dirname = path.dirname(filename);

    //检测是否有缓存，有的话直接返回数据 -- 避免再次读取文件
    $require.cache = $require.cache || {};
    if($require.cache[filename])
        return $require.cache[filename].exports;

    //读取文件
    const fs =require('fs');
    const code = fs.readFileSync(filename,'utf8');//同步读取文件

    //执行代码，为其添加私有空间 -- module是为了装导出的结果
    const module = {id:filename,exports:{}};
    const exports = module.exports;

    const codeStr = `!function($require,module,exports,__dirname,__filename){
        ${code}
    }($require,module,exports,dirname,filename);`
    eval(codeStr);

    //添加缓存
    $require.cache[filename] = module;

    //返回module.exports的内容
    return module.exports;
 }

 //Test
 //$require('../11.js').say('hello world!');

 //测试缓存
 setInterval(()=>{
     console.log($require('../12.js').getTime());
 },1000);