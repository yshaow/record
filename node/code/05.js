/**
 * 控制台 登陆操作
 */

const usernameInfo = '请输入用户名：\n';
const passwordInfo = '请输入密码：\n';
const users = {
    admin:'123',
    user:'321'
};
let username = '';

process.stdout.write(usernameInfo);
process.stdin.on('data', input => {
    //input为用户输入的内容 类型为Object -- 二进制数据流
    input = input.toString().trim();//去掉input后面的回车

    if(username){//输入密码
        
        if(users[username] === input){
            console.log('登陆成功！');
        }else{
            console.log('您输入的密码错误！');
            process.stdout.write(passwordInfo);

        }

    }else{//输入用户名
        const currUser = users[input];

        if(currUser == null){
            console.log('您输入的用户名不存在！');
            process.stdout.write(usernameInfo);

            username = '';
        }else{
            username = input;

            process.stdout.write(passwordInfo);
        }

    }

});


