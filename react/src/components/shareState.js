/**
 * 挂起state -- 主要是在子组件中去影响父组件中的state值，即通过props属性想子组件传入父组件对应的函数，在子组件中调用即可
 * 通常 多个组件需要一些相同的变化的数据，推荐在最近的相同祖先上挂起共享的state属性
 */

import React from 'react'

/**
 * 挂起state
 */
class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value);
    }

    render(){//挂起
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return <fieldset>
                    <legend>Enter temperature in {scaleNames[scale]}</legend>
                    <input type="text" value={temperature} onChange={ e => this.handleChange(e)}/>
                </fieldset>;
    }
}

//书写转换函数
function toCelsius(fahrenheit){
    return (fahrenheit - 32)*5/9;
};
function toFahrenheit(celsius){
    return (celsius * 9/5)+32;
}
function tryConvert(temperature,convert){
    const input =parseFloat(temperature);
    if(Number.isNaN(input)){
        return '';
    }
    const output =convert (input);
    const rounded=Math.round(output * 1000)/1000;
    return rounded.toString();
}

const scaleNames={
    c:'Celsius',
    f:'Fahrenheit'
}

class ShareState extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            temperature:'',
            scale:'c'
        }
    }

    handleCelsiusChange(temperature){
        this.setState({
            scale:"c",
            temperature
        })
    }

    handleFahrenheitChange(temperature){
        this.setState({
            scale:"f",
            temperature
        });
    }
    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
        return <div>
                    <TemperatureInput
                        scale="c"
                        temperature={celsius}
                        onTemperatureChange = { e=>this.handleCelsiusChange(e)}
                    />
                    <TemperatureInput
                        scale="f"
                        temperature={fahrenheit}
                        onTemperatureChange = { e=>this.handleFahrenheitChange(e)}
                    />
                </div>
    }
}

export default ShareState;
