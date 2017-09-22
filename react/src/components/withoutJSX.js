/**
 * 无JSX的react
 */
import React from 'react'

/**************使用JSX*************/
// class Hello extends React.Component{
//     render(){
//         return <div>Hello {this.props.toWhat}</div>
//     }
// }
/**************不使用jsx*************/
class Hello extends React.Component{
    render(){
        return React.createElement('div',null,`Hello ${ this.props.toWhat }`);
    }
}
export default Hello;
