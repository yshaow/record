/**
 * readline测试
 */
const fs = require('fs');
const path = require('path');
const iconv = require('iconv-lite');
const readline = require('readline');

const filename = path.join(__dirname,'./resource/血染的风采.lrc');
//创建文本流
let stream = fs.createReadStream(filename).pipe(iconv.decodeStream('gbk'));

//创建读取一行实例
const rl = readline.createInterface({input:stream});

const reg = /\[(\d{2})\:(\d{2})\.(\d{2})\]\s{0,1}(.+)/;
const begin = new Date().getTime();
//监听line
rl.on('line', line => {
    const matchs = reg.exec(line);
        if(matchs){
            const m = +matchs[1];
            const s = +matchs[2];
            const f = +matchs[3];
            const layer = matchs[4];
            
            const offset = new Date().getTime() - begin;
            setTimeout(()=> {
                console.log(layer)
            },m * 60 * 1000 + s * 1000 + f - offset);

        }else{
            console.log(line);
        }
    
})