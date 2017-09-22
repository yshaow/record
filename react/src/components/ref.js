/**
 * refs与DOM
 */
import React from 'react'
/***************在HTML DOM上使用ref***************/
class CustomTextInput extends React.Component{
    constructor(props){
        super(props);
    }

    focusTextInput(){
        this.textInput.focus();
    }

    render(){
        return <div>
                    <input type="text" ref={ input => {this.textInput = input} }/>
                    <input type="button" value="FOCUS" onClick={e => this.focusTextInput(e)}/>
                </div>
    }
}

/***************在class组件上使用ref*******************/
class AutoFocusTextInput extends React.Component{
    componentDidMount(){
        this.currObj.focusTextInput();
    }

    render(){
        return <CustomTextInput ref={obj =>{this.currObj = obj;}}/>
    }
}

/***************refs与函数组件*******************/
function MyFunctionComponent(){
    return <input type="text" value="aaa"/>;
}
class Parent extends React.Component{
    render(){
        return <MyFunctionComponent ref={obj=>{console.log(obj);/*null*/}}/>
    }
}
/**************在函数组件内部使用ref************/
function CustomTextInputFun(props){
    let textInput = null;

    function handleClick(){
        textInput.focus();
    }

    return <div>
                <input type="text" ref={ elem=>{textInput=elem} }/>
                <input type="button" value="FOCUSFUN" onClick={handleClick}/>
            </div>
}

/**************将子组件的DOM暴露给父组件************/
function CustomTextInputA(props){
    return <div>
                <input type="text" ref={props.inputRef}/>
            </div>
}

class ParentA extends React.Component{
    render(){
       // return <CustomTextInputA inputRef={ el=> this.inputElement = el}/>
        return <CustomTextInputA inputRef={ this.props.inputRef}/>
    }
}

class GrandParent extends React.Component{
    render(){
        return <ParentA inputRef = { el=>this.inputElement = el}/>
    }

    componentDidMount(){
        //console.log(this.inputElement);
    }
}

/********************String Refs*************************/
class StringRefChild extends React.Component{
    render(){
        return <div ref="testStr">String Refs</div>
    }

    componentDidMount(){
        console.log("嘻嘻");
        console.log(this.refs.testStr);
    }
}

class StringRefParent extends React.Component{
    render(){
        return <StringRefChild fun = {el => this.a = el}/>
    }
}
export default StringRefParent
















