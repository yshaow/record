/**
 * 不使用ES6的React
 */

/****************定义组件*****************/
// import React from 'react'
// class Greeting extends React.Component{
//     render(){
//         return <h1>Hello,{this.props.name}</h1>
//     }
// }
//export default Greeting

// var createReactClass = require('create-react-class');
// var React = require('react');
// var Greeting = createReactClass({
//     render:function(){
//         return <h1>Hello,{this.props.name}</h1>
//     }
// });
//
// module.exports = {
//     Greeting:Greeting
// }

/****************声明默认props*****************/
// import React from 'react'
// class Greeting extends React.Component{
//     render(){
//         return <h1>Hello,{this.props.name}</h1>
//     }
// }
// Greeting.defaultProps = {
//     name:"Mary"
// }
// export default Greeting

// var React = require('react');
// var createReactClass = require('create-react-class');
// var Greeting = createReactClass({
//     render:function(){
//         return <h1>Hello,{this.props.name}</h1>
//     },
//     getDefaultProps:function(){
//         return {
//             name:"无ES6的默认props"
//         }
//     }
// });
// module.exports = {
//     Greeting:Greeting
// }

/****************初始化state*****************/
// import React from 'react'
// class Counter extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {count:props.initCount}
//     }
//     render(){
//         return <h1>Hello,{this.state.count}</h1>
//     }
// }
// export default Counter;

// var React = require('react');
// var createReactClass = require('create-react-class');
// var Counter = createReactClass({
//     render:function(){
//         return <h1>Hello,{this.state.count}</h1>
//     },
//     getInitialState:function(){
//         return {
//             count:this.props.initCount
//         }
//     }
// });
// module.exports = {
//     Counter:Counter
// }

/****************自动绑定this*****************/
// import React from 'react'
// class SayHello extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {msg:"Hello!"};
//         //绑定this
//         this.handleClick = this.handleClick.bind(this);
//     }
//
//     handleClick(){
//         alert(this.state.msg);
//     }
//
//     render(){
//         return <button onClick={ this.handleClick }>HELLO</button>
//     }
// }
// export default SayHello;

// var React = require('react');
// var createReactClass = require('create-react-class');
// var SayHello = createReactClass({
//     getInitialState:function(){
//         return {
//             msg:"Hello! 无ES6"
//         }
//     },
//     handleClick:function(){
//         alert(this.state.msg);
//     },
//     render:function(){
//         return <button onClick={ this.handleClick }>HELLO</button>
//     }
// });
// module.exports = {
//     hello:SayHello
// }

/****************mixins*****************/
var React = require('react');
var createReactClass = require('create-react-class');

//定义共享混合宏
var SetIntervalMixin = {
    componentWillMount:function(){//挂载hook
        console.log('第一个componentWillMount');
        this.intervals = []
    },
    setInterval:function(){
        console.log('第一个setInterval');
        this.intervals.push(setInterval.apply(null,arguments));
    },
    componentWillUnmount:function(){
        this.intervals.forEach(clearInterval);
    }
}

var test ={
    componentWillMount:function(){//挂载hook
        console.log('第二个componentWillMount');
    }
}
//声明组件
var TickTock = createReactClass({
    mixins:[SetIntervalMixin,test],//使用混合宏
    getInitialState:function(){
        return {seconds:0}
    },
    componentDidMount:function(){
        this.setInterval(this.tick,1000);
    },
    tick:function(){
        this.setState({
            seconds:this.state.seconds +1
        });
    },
    render:function(){
        return <p>React has been running for {this.state.seconds} seconds</p>
    }
});
module.exports ={
    TickTock:TickTock
}































