/**
 * 处理文本输入
 *
 * TextInput是一个允许用户输入文本的基础组件，它有一个名为onChangeText的属性，此属性接受一个函数，而此函数会在文本变化时被
 * 调用。另外还有一个名为onSubmitEditing的属性，会在文本被提交后(用户按下软键盘上的提交键)调用。
 *
 */
import React ,{Component} from 'react'
import {Text,TextInput,View} from 'react-native'

export default class PizzaTranslator extends Component{
    constructor(props,contexts){
        super(props,contexts);
        this.state = {text:''}
    }

    render(){

        return (
            <View style={{padding:10}}>
                <TextInput
                    style={ { height:40 }}
                    placeholder='Type here to translate'
                    onChangeText={ text => this.setState({text}) }
                    onSubmitEditing={ () => alert('提交！')}
                />
                <Text style={ {padding:10,fontSize:42} }>
                    {this.state.text.split(' ').map( word => word && '🍕').join(' ')}
                </Text>
            </View>
        );
    }
}















