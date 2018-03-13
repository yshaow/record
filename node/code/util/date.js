/**
 * 
 * @author 小五
 * @description 日期格式化
 * @example
 *      new Date().format('yyyy-M-d HH:mm:ss.ff qq') 
 *      2018-2-20 18:58:07.54 01
 */

 Date.prototype.format = function(format){

    //定义正则规则
    var regObj = {
        'M+':this.getMonth() + 1,//月份
        'd+':this.getDate(),//日
        'H+':this.getHours(),//小时
        'm+':this.getMinutes(),//分
        's+':this.getSeconds(),//秒
        'q+':Math.floor((this.getMonth() + 3) / 3),//季度
        'f+':this.getMilliseconds()//毫秒
    }

    //处理年份
    if(/(y+)/.test(format))
        format = format.replace(RegExp.$1,(this.getFullYear() + '').substr(4 - RegExp.$1.length));
    
    //处理其他
    for(var reg in regObj){
        if(new RegExp('('+ reg +')').test(format))
            format = format.replace(
                RegExp.$1, RegExp.$1.length === 1 
                ? regObj[reg]
                : ('00' + regObj[reg]).substr(('' + regObj[reg]).length)
            );  
    }
    
    return format;
 }