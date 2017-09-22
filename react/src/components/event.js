/*************React中的事件***************/
/**
 *  事件名--驼峰命名 如onClick
 *  jsx中调用:{函数名}
 *  阻止默认行为：e.preventDefault //已考虑兼容性
 *
 */
import React from 'react'
class Event extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggle: true};
    }

    handle() {
        this.setState(prevState => ({isToggle: !prevState.isToggle}));
    }

    render() {
        return <button onClick={(e) => this.handle(e)}>{this.state.isToggle ? "OFF" : "ON"}</button>
    }

}
export default Event;
