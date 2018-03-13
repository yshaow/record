/**
 * 动态的显示歌词
 */
const fs = require('fs');
const path = require('path');
const iconv = require('iconv-lite');

fs.readFile(path.join(__dirname,'./resource/血染的风采.lrc'),(err,buf) => {
    if(err) throw err;

    //使用gbk读取buffer中的内容
    const data = iconv.decode(buf,'gbk');

    //[01:52.73] 也许我的眼睛 再不能睁开
    const reg = /\[(\d{2})\:(\d{2})\.(\d{2})\]\s{0,1}(.+)/;

    const begin = new Date().getTime();
    data.split('\n').forEach( line => {
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
    });
});

