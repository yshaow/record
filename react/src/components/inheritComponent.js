/**
 * 组件的继承 -- 不推荐
 */
import React from 'react'

class baseComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {data:"我是父组件"}
    }

    render(){
        return <div>
                    {this.state.data}
                    <button onClick={e=>this.handle(e)}>Change Data</button>
                </div>
    }

    handle(){
        this.setState({data:"父组件数据改变"});
    }
}

class childComponent extends baseComponent{
    constructor(props){
        super(props);
    }
    render(){
        console.log(this.handle);
        console.log(this.state);
        return null
    }
}
export default childComponent;
