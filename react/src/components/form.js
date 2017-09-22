/**
 * form表单
 * 在React中，易变的数据保持存储在组件的state组件中，仅仅通过setState()更新数据
 * 在form表单中通过value属性来实现其数据的绑定
 */
import React from 'react'

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {username:"",opts:"c",desc:"",sex:"male",like:true}
    }

    handleChange(e){
        let currElem = e.currentTarget,
            value = currElem.type === 'checkbox' ? currElem.checked : currElem.value;
        this.setState({
            [currElem.name]:value
        });
    }

    handleSubmit(e){
        e.preventDefault();//阻止默认事件
        console.log(this.state);
    }

    render(){
        return <form onSubmit={(e)=>this.handleSubmit(e)} className="form">
                    <label>
                        姓名：<input type="text" value={this.state.username} name="username" onChange={(e)=>this.handleChange(e)}/>
                    </label>
                    <hr/>
                    <label>
                        描述<textarea value={this.state.desc} name="desc" onChange={(e)=>this.handleChange(e)}/>
                    </label>
                    <hr/>
                    <label>
                        <select value={this.state.opts} name="opts" onChange={(e)=>this.handleChange(e)}>
                            <option value="a">A</option>
                            <option value="b">B</option>
                            <option value="c">C</option>
                        </select>
                    </label>
                    <hr/>
                    <label>
                        男<input type="radio" name="sex" value="male" onChange={(e)=>this.handleChange(e)}/>
                        女<input type="radio" name="sex" value="female" onChange={(e)=>this.handleChange(e)}/>
                    </label>
                    <hr/>
                    <label>
                        <input type="checkbox" name="like" value={this.state.like} onChange={(e)=>this.handleChange(e)}/>哈哈
                    </label>
                    <input type="submit" value="提交"/>
                </form>
    }
}
export default Form
