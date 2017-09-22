/**
 * state 私有的被当前组件所控制 仅通过class声明组件可用
 */
import React from 'react'
export default class StateProp extends React.Component{
    constructor(props){//接受当前组件的props
        super(props);//必须执行这一步才能使用this
        this.state = {date:new Date(),count:1};//唯一设置state的地方 构造器 以对象的形式添加属性
        //构造器中拿不到props属性
    }

    render (){
        return <div>state prop测试 {this.state.date.toLocaleTimeString()}</div>
    }

    componentDidMount(){//组件钩子后的hook
        this.timerID = setInterval(()=>this.tick(),1000)

    }

    componentWillUnmount(){//组件销毁时停止定时器
        clearInterval(this.timerID);
        this.timerID = null;
    }

    tick(){//定义计时器改变state值
        //setState修改state值 setState更新是合并当前对象与以前state对象
        /**
         * 参数为object 或函数 当state与props一起使用时 使用函数 函数参数prevState,props
         */
        this.setState({
            date:new Date()
        });

    }
}
