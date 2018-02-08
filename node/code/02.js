
var a = 1;
global.b = 2;

//console.log(a,global.a,global.b)

/*********process.argv***********/
/*比如：执行02脚本node 02 03 04 05
返回结果 ：[ 'F:\\nvm\\dev\\nodejs\\node.exe',//执行命令的指令
            'E:\\projects\\record\\node\\code\\02',//当前脚本的路径
            //后面的为传入的参数
            '03',
            '04',
            '05' ]*/
//console.log(process.argv);

//模拟实现npm的几个常见指令
const argvs = process.argv.slice(2);
switch(argvs[0]){
    case 'init':
        console.log('init')
        break;
    case 'install':
        let packageName = argvs[1];
        console.log(`installing ${packageName}`);
        break;
    case 'uninstall':
        console.log('uninstall');
        break;
}
//获取用户的环境变量
//console.log(process.env);




