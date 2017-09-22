/**
 * Context的使用
 */
import React from 'react'

/************手动传递color prop属性**************/
// class Button extends React.Component{
//     render(){
//         return <button style={ {background:this.props.color} }>{this.props.children}</button>
//     }
// }
//
// class Msg extends React.Component{
//     render(){
//         return <div>{this.props.text} <Button color={this.props.color}>Delete</Button></div>
//     }
// }
//
// class MsgList extends React.Component{
//     render(){
//         const color = 'purple';
//         const children = this.props.msgs.map( msg => <Msg text={msg.text} color={color} key={ msg.text }/>);
//         return <div>{ children }</div>;
//     }
// }

/************使用Context 传递color**************/
import PropTypes from 'prop-types'

/*************类接受context*************/
// class Button extends React.Component{
//     constructor(props,context){
//         super(props);
//         console.log(context);
//     }
//     render(){
//         //使用上下文 属性
//         console.log(this,"button*********************");
//         return <button style= { {background:this.context.color} }>{ this.props.children }</button>
//     }
// }
//设置上下文属性的类型
// Button.contextTypes = {//如果子组件想拿到父组件定义的上下文，必须定义这个上下文类型
//     color:PropTypes.string
// }

/**********函数组件接收context**********/
function Button({children},context){
    console.log(context);
    return <button style={ {background:context.color} }>{children}</button>
}
//设置上下文属性类型
Button.contextTypes = {
    color:PropTypes.string
}
class Msg extends React.Component{
    constructor(props,context){
        super(props);
        //console.log(context);
    }

    render(){
        console.log(this,"Msg*********************");
        return <div>{this.props.text} <Button>Delete</Button></div>
    }
}

class MsgList extends React.Component{
    getChildContext(){//设置context React自动向下传递信息，并且子组件都可以通过定义contextTypes去访问它。
                      // 如果contextTypes没有定义，context将是一个空对象。
        return {color:"purple"}
    }

    render(){
        const children = this.props.msgs.map(msg => <Msg text={msg.text} key = {msg.text}/>);

        return <div>{children}</div>
    }
}
MsgList.childContextTypes = {//设置上下文时，这个必须定义
    color:PropTypes.string
}


/*********************context的更新************************/
class MediaQuery extends React.Component{
    constructor(props){
        super(props);
        this.state = {type:"desktop"}
    }

    getChildContext(){//设置context
        return {type:this.state.type}
    }

    componentDidMount(){
        const checkMediaQuery = ()=>{
            const type = window.matchMedia("(min-width:1025px)").matches ? "desktop" :"mobile";

            //更新state
            if(type !== this.state.type) this.setState({type});
        }

        //添加监听事件
        window.addEventListener('resize',checkMediaQuery);

        //执行一次检测函数
        checkMediaQuery();
    }

    render(){
        return <ShowCurrState />;
    }
}
MediaQuery.childContextTypes = {
    type:PropTypes.string
}

function ShowCurrState(props,context){
    return <div>{context.type}</div>
}
ShowCurrState.contextTypes = {
    type:PropTypes.string
}
export default MediaQuery;
