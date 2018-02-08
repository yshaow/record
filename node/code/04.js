const fs = require('fs');

const fps = 10;
let frames = [];

for(let i =1;i<7;i++){
    frames[frames.length] = fs.readFileSync(`./frames/${i}.txt`,'utf8');
}

let current = 0;
setInterval(()=>{

    //清空当前控制台
    process.stdout.write('\033[2J');
    process.stdout.write('\033[0f');

    //输出新的内容
    if(current === frames.length) current = 0;
    process.stdout.write(frames[current++]);
},1000/fps);