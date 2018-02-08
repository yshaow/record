//在控制台中输出 hello world
//process.stdout.write('hello world');


//在控制台上绘制字符画
//console.log(process.stdout.getWindowSize());

const fps = 10;

const frames = [`
     ╭~~~╮
    (o^.^o)`,`
     ╭~~~╮
    (o~.~o)`,`
     ╭~~~╮
    (o@.@o)`,`
      ╭﹌╮
    (o'.'o)`
];

let current = 0;
setInterval(()=>{

    //清空当前控制台
    process.stdout.write('\033[2J');
    process.stdout.write('\033[0f');

    //输出新的内容
    if(current === frames.length) current = 0;
    process.stdout.write(frames[current++]);
},1000/fps);