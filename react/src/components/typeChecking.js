/**
 * 类型检测
 */
import React from 'react'
import PropTypes from 'prop-types'

// class Greeting extends React.Component{
//     render(){
//         return <h1>Hello,{this.props.name +","+ this.props.age}</h1>
//     }
// }
function Greeting (props){
    return <h1>Hello,{props.name +","+ props.age+"!"}</h1>
}

/**
 * 定义prop类型
 */
Greeting.propTypes = {
    name:PropTypes.string,
    age:PropTypes.number,
    children:PropTypes.element
}

/**
 * 指定默认值
 */
Greeting.defaultProps = {
    name:"Stranger",
    age:"50"
}














export default Greeting;
