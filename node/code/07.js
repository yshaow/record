/**********CMD规范定义模块测试 -- node中不支持******** */

define(function(require,module,exports){

    function add(a,b){
        return a + b;
    }

    //导出
    module.exports = {
        add
    }
});