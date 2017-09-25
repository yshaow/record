/**
 * React.Component的相关方法测试
 */

import React from 'react'

class ComponentMethod extends React.Component{
    constructor(props){
        super(props);

        console.log("**********constructor**********");

        this.state = {
            propsTest:props.test
        }
    }

    componentWillMount(){
        console.log("**********componentWillMount**********");

        // setTimeout(() =>{
        //     this.setState({
        //         propsTest:"componentWillMount"
        //     })
        // },5000)
    }

    componentDidMount(){
        console.log("**********componentDidMount**********");

        // setTimeout(() =>{
        //     this.setState({
        //         propsTest:"componentDidMount"
        //     })
        // },10000)
    }

    componentWillReceiveProps(nextProps){
        console.log("**********componentWillReceiveProps**********");
        if(this.props !== nextProps){
            this.setState({
                propsTest:nextProps.test
            });
        }
    }

    shouldComponentUpdate(){
        console.log("**********shouldComponentUpdate**********");
        return true;
    }

    componentWillUpdate(nextProps,nextState){
        console.log("**********componentWillUpdate**********");
    }

    componentDidUpdate(prevProps,prevState){
        console.log("**********componentDidUpdate**********");
        if(this.props !== prevProps){
            this.setState({
                propsTest:"componentDidUpdate"
            });
        }
    }

    componentWillUnmount(){
        console.log("**********componentWillUnmount**********");
    }

    render(){
        console.log("**********render**********");
        return <div>
                    <span>Props:{this.props.test}</span>
                    <hr/>
                    <span>state:{this.state.propsTest}</span>
                </div>
    }
}

class Container extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            test:props.test
        }
    }
    render(){
        return <div>
            <ComponentMethod test={ this.state.test }/>
            <hr/>
            <button onClick={ () => {
                this.setState({
                    test:"a"
                })
            } }>改变props</button>
        </div>
    }
}

export default Container;
