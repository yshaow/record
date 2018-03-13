/**
 * 监听文件变化
 *  markdown文件自动转换
 *  使用marked库将 .md文件转成html 只要满足.md文件规则的内容都可以转换
 *  使用browser-sync 把修改文件同步到浏览器 它需要用到python环境
 */
const fs = require('fs');
const path = require('path');
const marked = require('marked');
const browserSync = require('browser-sync');

//接收需要转换的文件路径
const target = path.join(__dirname, process.argv[2] || '../README.md');
const filename = target.replace(path.extname(target), '.html');
const indexpath = path.basename(filename);//默认打开文件
// 开启一个服务目录
browserSync({ 
    server: path.dirname(target),
    index:indexpath,
    notify:false//去掉提示
});

//监视文件变化
fs.watchFile(target, { interval: 400 }, (curr, prev) => {
    //curr 当前文件状态  prev上一次文件状态

    //判断文件是否有变化
    if (curr.mtime === prev.mtime)
        return false;

    //读取文件
    fs.readFile(target, 'utf8', (err, content) => {
        if (err)
            throw err;

        //将内容转换成html -- 只有body里面的内容
        let html = marked(content);

        //添加样式  使用github.css
        fs.readFile(path.join(__dirname, './github.css'), 'utf8', (err, css) => {
            if (err)
                throw err;

            html = template(css, html);

            //生成html文件
            fs.writeFile(filename, html, 'utf8', err => {
                if (err)
                    throw err;

                //刷新页面
                browserSync.reload(indexpath);     

            });
        });
    })
});

const template = (style, content) => (`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"/><style>${style}</style></head><body><div class='vs'>${content}</div></body></html>`);

