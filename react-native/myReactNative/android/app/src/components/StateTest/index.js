/**
 * State状态测试
 * 使用两种数据来控制一个组件：props和state。props是在父组件中指定，而且一经指定，在被指定的组件的生命周期中则不再改变。
 * 对于需要改变的数据 需要使用state。
 */
import React,{Component} from 'react'
import {Text,View} from 'react-native'

class Blink extends Component{
    constructor(props,contexts){
        super(props,contexts);

        this.state = {showText:true};

        //修改showText值
        setInterval( () => {
           this.setState(prevState => ({showText:!prevState.showText}));
        },1000);
    }

    render(){
        let showContent = this.state.showText ? this.props.text : '';
        return <Text>{showContent}</Text>
    }
}

export default class BlinkApp extends Component{

    render(){
        return (
            <View>
                <Blink text='I love to blink' />
                <Blink text='Yes blinking is so great' />
                <Blink text='Why did they ever take this out of HTML' />
                <Blink text='Look at me look at me look at me' />
            </View>
        );
    }
}

















