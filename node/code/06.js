/**
 * 
 * js是单线程的 对于需要耗时的代码块 可以放到最后执行
 * 
 *  setTimeout会把回调函数放到事件队列的最后一个，从而到达改变代码块执行顺序的目的
 */


//耗时代码(阻塞)
// console.log('代码开始执行了');


// console.time('main');//计时器 -- 会计算出代码块执行的时间
// for(let i = 0 ; i <100000000;i++){
//     //耗时代码块
// }
// console.timeEnd('main');

// console.log('代码结束执行了');


//把耗时代码放到最后执行 -- 对于后面模块对耗时模块代码没有依赖的情况下 可以使用setTimeout来实现
//对于有依赖的情况下 通常使用异步回调的方式来避免出现阻塞的情况 -- node就是这种实现
console.log('代码开始执行了');


console.time('main');//计时器 -- 会计算出代码块执行的时间
setTimeout(() => {
    for(let i = 0 ; i <100000000;i++){
        //耗时代码块
    }
    console.log('耗时代码,最后执行');
},0)
console.timeEnd('main');

console.log('代码结束执行了');
