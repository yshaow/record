'use strict';

import React from 'react';
import ReactDom from 'react-dom';

import { Router, Route, hashHistory } from 'react-router';

/*************jsx*****************/
// const elem1 = <div className="elem1">test1</div>
// const elem2 = React.createElement(
//                     "h1",//元素名
//                     {className:"elem2"},//属性
//                     elem1//子元素
//               );
// //渲染
// ReactDom.render(elem2,document.querySelector('#app'));
/*************组件定义************/
    /***函数调用****/
    // import Welcome from './componentAndProp';
    // //方式1 -- 函数调用可以小写
    // //ReactDom.render(welcome({name:"小屋"}),document.getElementById('app'));
    // //方式2 -- 标签调用 需要大写
    // ReactDom.render(<Welcome name="小刘a" />,document.getElementById('app'));
    /***类组件调用**/
    // import Welcome from './componentAndProp';
    // ReactDom.render(<Welcome name="哈哈" age="30"/>,document.getElementById('app'));

    // var App = React.createClass({
    //     render: function() {
    //         return elem2;
    //     }
    // });
/****************state*****************/
// import StateProp from './state';
// ReactDom.render(<StateProp name="age" count="1"/>,document.getElementById('app'));

/*****************事件******************/
// import Event from './event'
// ReactDom.render(<Event/>,document.getElementById('app'));

/******************条件渲染****************/
// import ConditionRender from './conditionRender'
// ReactDom.render(<ConditionRender state={true} unreadMsg = { ["msg1","msg2"]}/>,document.getElementById('app'));

/******************阻止组件渲染****************/
// import StopComponentRender from './stopComponentRender'
// ReactDom.render(<StopComponentRender/>,document.getElementById('app'));

/******************列表与keys****************/
// import ListAndKeys from './listAndKeys'
// ReactDom.render(<ListAndKeys numbers={[1,2,3]}/>,document.getElementById('app'));

/******************form表单****************/
// import Form from './form'
// ReactDom.render(<Form/>,document.getElementById('app'));

/******************挂起state****************/
// import ShareState from './shareState'
// ReactDom.render(<ShareState/>,document.getElementById('app'));

/******************组件的合成****************/
// import MergeComponent from './mergeComponent'
// ReactDom.render(<MergeComponent/>,document.getElementById('app'));

/******************组件的继承****************/
// import InheritComponent from './inheritComponent'
// ReactDom.render(<InheritComponent/>,document.getElementById('app'));

/**********************jsx的深入************************/
// import JsxTest from './jsx'
// ReactDom.render(<JsxTest storyType="test2"/>,document.getElementById('app'));

/**********************prop类型检测************************/
// import TypeChecking from './typeChecking'
// ReactDom.render(<TypeChecking name="小屋">
//     <div>a</div>
// </TypeChecking>,document.getElementById('app'));

/**********************refs与DOM************************/
// import Ref from './ref'
// ReactDom.render(<Ref/>,document.getElementById('app'));

/**********************不受控制的组件************************/
// import UncontrollComponent from './uncontrollComponent'
// ReactDom.render(<UncontrollComponent/>,document.getElementById('app'));

/**********************无ES6的React************************/
// import WithoutEs6 from './withoutES6'
// ReactDom.render(<WithoutEs6/>,document.getElementById('app'));

// const WithoutEs6 = require('./withoutES6');
// ReactDom.render(<WithoutEs6.TickTock/>,document.getElementById('app'));

/**********************无JSX的react************************/
// import WidthoutJsx from './withoutJSX'
// //ReactDom.render(<WidthoutJsx toWhat="World"/>,document.getElementById('app'));
// ReactDom.render(
//     React.createElement(WidthoutJsx,{toWhat:"无JSX"},null),
//     document.getElementById('app')
// );

/**********************使用Context************************/
// import Context from './context'
// const msgs = [{text:"A"}];
// ReactDom.render(<Context msgs={ msgs }/>,document.getElementById('app'));

/**********************使用Web Components************************/
// import WebComponents from './webComponent'
// ReactDom.render(<WebComponents name="哈哈"/>,document.getElementById('app'));

/**********************高阶组件************************/
// import HigherComponents from './higherComponents'
// ReactDom.render(<HigherComponents/>,document.getElementById('app'));

/**********************React.children测试************************/
// import ChildrenTest from './childrenTest'
// ReactDom.render(<ChildrenTest/>,document.getElementById('app'));

/**********************React.Component测试************************/
import ComponentMethods from './componentMethods'
ReactDom.render(<ComponentMethods test="props test"/>,document.getElementById('app'));
// var List = React.createClass({
//     render: function() {
//         return (
//             <div>
//                 <h5 className="title">hello, yeoman app!</h5>
//                 <div><a href="#/">返回首页</a></div>
//                 <div>这是列表页</div>
//             </div>
//         );
//     }
// });

// var Detail = React.createClass({
//     render: function() {
//         return (
//             <div>
//                 <h5 className="title">hello, yeoman app!</h5>
//                 <div><a href="#/">返回首页</a></div>
//                 <div>这是详情页</div>
//             </div>
//         );
//     }
// });

//最终渲染
// ReactDom.render((
//     <Router>
//         <Route path='/' component={App}></Route>
//         <Route path='/list' component={List} />
//         <Route path='/detail' component={Detail} />
//     </Router>
// ), document.getElementById('app'));
//ReactDom.render(<App />,document.getElementById('app'));
