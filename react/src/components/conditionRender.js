/**
 * 条件渲染
 */
import React from 'react'

/***************************************/
function Test1() {
    return <h2>test1</h2>;
}
function Test2() {
    return <h4>test2</h4>
}
/**
 * 通过js控制元素的创建
 * @constructor
 */
// export default function ConditionRender (props){
//     if(Boolean(props.state)) return <Test1/>;
//     else return <Test2/>;
// }

/***************************************/
function Login(props) {
    return <button onClick={props.handle}>Login</button>;
}
function LoginOut(props) {
    return <button onClick={props.handle}>LoginOut</button>
}
/**
 * 元素变量
 */
// export default class ConditionRender extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {isLogin: false}
//     }
//
//     handleLogin() {
//         this.setState({isLogin: true})
//     }
//
//     handleLoginOut() {
//         this.setState({isLogin: false});
//     }
//
//     render() {
//         //定义元素变量
//         let button = null;
//         if (this.state.isLogin) button = <LoginOut handle={ (e) => this.handleLoginOut(e)}/>
//         else button = <Login handle={(e) => this.handleLogin(e)}/>
//
//         //使用元素变量
//         return <div>{button}</div>
//     }
// }

/***************************************/
/**
 * 行内if操作 -- &&操作符
 */
// export default function ConditionRender(props){
//     var unreadMsg = props.unreadMsg;
//
//     return <div>
//                 <h2>hello</h2>
//                 {
//                     unreadMsg.length > 0
//                     &&
//                     <h4>You have {unreadMsg.length} unread message.</h4>
//                 }
//             </div>
//
// }

/**
 * 行内if-else -- 三目运算(条件操作符)
 */
export default class ConditionRender extends React.Component {
    constructor(props) {
        super(props)
        this.state = {isLogin: false}
    }

    handleLogin() {
        this.setState({isLogin: true});
    }

    handleLoginOut() {
        this.setState({isLogin: false});
    }

    render() {
        return <div>
                    {
                        this.state.isLogin ?
                            <LoginOut handle={(e) => this.handleLoginOut(e)}/> :
                            <Login handle={(e) => this.handleLogin(e)}/>
                    }
               </div>
    }
}

