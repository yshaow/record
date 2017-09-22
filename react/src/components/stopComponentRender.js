/**
 * 阻止组件渲染
 * 由于一些原因你可能想让一个组件隐藏自己 即使它是被另一个组件已经渲染的。通过return null 来替代 它的渲染输出即可
 */
import React from 'react'

function WarningMsg(props) {
    if (!props.warn) return null;

    return <div>{props.warn}</div>;
}

export default class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {warningMsg: "这是警告信息！"};
    }

    handle() {
        this.setState((prevState) => ({warningMsg: prevState.warningMsg ? "" : "这是警告信息！"}));
    }

    render() {
        return <div>
                    <WarningMsg warn={this.state.warningMsg}/>
                    <button onClick={(e) => this.handle(e)}>{this.state.warningMsg ? "HIDE" : "SHOW"}</button>
               </div>
    }
}
