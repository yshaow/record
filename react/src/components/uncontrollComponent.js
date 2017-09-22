/**
 *  不受控制的组件
 **/
import React from 'react'

class NameForm extends React.Component{
    constructor(props){
        super(props);
    }

    handleSubmit(e){
        e.preventDefault();

        console.log(this.input.value);
    }
    render(){
        return <form onSubmit={ e=> this.handleSubmit(e) }>
                    <label>Name: <input type="text" defaultValue="Blobk" ref={ el => this.input = el }/></label>
                    <input type="submit" value="提交"/>
                </form>
    }
}

/*****************shouldComponentUpdate*****************/
// class CounterButton extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {count:1}
//     }
//
//     shouldComponentUpdate(nextProps,nextState){
//         console.log(this.state,nextState);
//         if(this.props.color !== nextProps.color){
//             return true;
//         }
//
//         if(this.state.count !== nextState.count){
//             return true;
//         }
//
//         return false;
//     }
//
//     render(){
//         return <button color={this.props.color} onClick={() => this.setState(state => ({count:state.count +1}))}>
//                 Count: {this.state.count}</button>
//     }
// }

/**********************PureComponent类***********************/
class CounterButton extends React.PureComponent{
    constructor(props){
        super(props);
        this.state = {count:1}
    }

    render(){
        return <button color={this.props.color} onClick={() => this.setState(state => ({count:state.count+1}))}>
                Count: {this.state.count}</button>;
    }
}

/**********************PureComponent失效***********************/
/*********数组突变*******/
class ListOfWords extends React.PureComponent{
    render(){
        return <div>{this.props.words.join(',')}</div>
    }
}
class WordAdder extends React.Component{
    constructor(props){
        super(props);
        this.state = {words:['food']}
    }

    handleClick(){
        // const words = this.state.words;
        // words.push('a');
        // this.setState({words});
        //console.log(words);

        // this.setState(prevState => ({
        //     words:prevState.words.concat(['a'])
        // }));

        this.setState( prevState => ({
            words:[...prevState.words,'b','c']
        }));
    }

    render(){
        return <div>
                    <button onClick={ e => this.handleClick(e) }>添加单词</button>
                    <ListOfWords words = {this.state.words}/>
                </div>
    }
}

/*********对象突变*******/
class Test1 extends React.PureComponent{
    render(){
        return <div>{this.props.test}</div>
    }
}

class Test2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {test:"a"}
    }

    handleClick(){
        this.setState({
            test:"b"
        });
    }

    render(){
        return <div>
            <Test1 test= { this.state.test}/>
            <button onClick={ e=> this.handleClick(e) }>change</button>
        </div>
    }
}
export default Test2;