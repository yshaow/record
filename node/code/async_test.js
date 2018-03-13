/**
 * 同步 异步测试
 */

 const fs = require('fs');
 const path = require('path');

//异步
 console.time('async');

 fs.readFile(path.join(__dirname,'./01.js'),'utf8',(err,data) => {
     if(err) throw err;

     console.log(data);
     
 })

 console.timeEnd('async');

 //同步
 console.time('sync');

try {
    const data = fs.readFileSync(path.join(__dirname,'./01.js'),'utf8');
    console.log(data);
} catch (error) {
    throw error;
}

 console.timeEnd('sync');