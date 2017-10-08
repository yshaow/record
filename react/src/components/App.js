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
// import ComponentMethods from './componentMethods'
// var reactRoot = ReactDom.render(<ComponentMethods test="props test"/>,document.getElementById('app'),function(){
//     console.log("ComponentMethods -->渲染了");
// });
// setTimeout(function(){
//     var result = ReactDom.unmountComponentAtNode(document.getElementById('app'));
//     console.log(result);
// },5000)

// import ReactDOMServer from 'react-dom/server'
// var result = ReactDOMServer.renderToString(<ComponentMethods/>);
// console.log(result);

/**********************DOM元素测试************************/
// import DOM from './dom'
// ReactDom.render(<DOM/>,document.getElementById('app'));

/**********************事件系统************************/
// import SyntheticEvent from './syntheticEvent'
// ReactDom.render(<SyntheticEvent/>,document.getElementById('app'));

/**********************Test Utilities************************/
// import TestUitilitiesfrom from './testUitilities'
// //ReactDom.render(<TestUitilitiesfrom/>,document.getElementById('app'));
// TestUitilitiesfrom();
/**********************浅渲染测试************************/
// import ShallowRenderer from './shallowRenderer'
// ShallowRenderer();
/**********************案例************************/
//import Example from './exmaple'
// const products = [
//     {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
//     {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
//     {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
//     {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
//     {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
//     {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
// ];
// ReactDom.render(<Example products={ products }/>,document.getElementById('app'));

/**********************React router测试************************/
// import ReactRouter from './reactRouter'
// ReactDom.render(<ReactRouter/>,document.getElementById('app'));

/**********************React router案例测试************************/
// import BaseExample from './router/baseExample'
// ReactDom.render(<BaseExample/>,document.getElementById('app'));

// import UrlParams from './router/urlParams'
// ReactDom.render(<UrlParams/>,document.getElementById('app'));

// import Authentication from './router/authentication'
// ReactDom.render(<Authentication/>,document.getElementById('app'));

// import DefineLink from './router/defineLink'
// ReactDom.render(<DefineLink/>,document.getElementById('app'));

// import PreventNav from './router/preventNav'
// ReactDom.render(<PreventNav/>,document.getElementById('app'));

// import NotFind from './router/notFind'
// ReactDom.render(<NotFind/>,document.getElementById('app'));

// import Paths from './router/paths'
// ReactDom.render(<Paths/>,document.getElementById('app'));

// import NavAslide from './router/navAslide'
// ReactDom.render(<NavAslide/>,document.getElementById('app'));

// import TransitionAnimate from './router/transitonAnimate'
// ReactDom.render(<TransitionAnimate/>,document.getElementById('app'));

// import FuzzyMatch from './router/fuzzyMatch'
// ReactDom.render(<FuzzyMatch/>,document.getElementById('app'));

// import RouterConfig from './router/routerConfig2'
// ReactDom.render(<RouterConfig/>,document.getElementById('app'));

import ModalGallery from './router/modalGallery'
ReactDom.render(<ModalGallery/>,document.getElementById('app'));

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
