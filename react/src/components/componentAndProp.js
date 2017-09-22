/******************组件与jsx********************/
//react组件 接受props参数 返回React元素描述
import React from 'react';
/*******组件定义方式1 -- 函数 *******/
/**
 * import Welcome(welcome) from './componentAndProp';
 * 方式1 -- 函数调用可以小写
 * ReactDom.render(welcome({name:"小屋"}),document.getElementById('app'));
 * 方式2 -- 标签调用 需要大写
 * ReactDom.render(<Welcome name="小刘a" />,document.getElementById('app'));
 * @param props
 * @return {XML}
 * @constructor
 */
function Welcome2 (props){//定义的函数名可以小写 props名称随意
    return <div>Hello,{props.name}</div>;
}

/*******组件定义方式2 -- 类 *******/
/**
 * import Welcome from './componentAndProp';
 * ReactDom.render(<Welcome name="哈哈" age="30"/>,document.getElementById('app'));
 */
export default class Welcome extends React.Component{//类名 可小写
    render (){
        //this.props.name = '嘻嘻'//this.props是只读属性
        return <div>Hello,{this.props.name + this.props.age}</div>;
    }
}

