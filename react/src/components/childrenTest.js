/**
 * React.Children测试
 */
import React from 'react'

class Test extends React.Component{
    constructor(props){
        super(props);
    }

    componentWillMount(){
        // React.Children.map(this.props.children,function(thisArgs){
        //     console.log("哈哈");
        // });

        // var count = React.Children.count(this.props.children);
        // console.log(count);

        var arr = React.Children.toArray(this.props.children);
        console.log(arr);
    }

    render(){
        return <div> {this.props.children} </div>
    }
}

function TestShow(){
    return <Test>
        <span>嘻嘻</span>
    </Test>
}
export default TestShow;