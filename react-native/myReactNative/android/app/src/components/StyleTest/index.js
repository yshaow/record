/**
 * 样式
 * 在React Native中，并不需要学习什么特殊的语法来定义样式。我们仍然使用js来写样式。所有的核心组件都接受名
 * 为style的属性，这些样式名基本上是遵循web上的css的命名，只是按照js的语法要求使用了驼峰命名法，如将background-color改为backgroundColor
 *
 * style属性可以是一个普通的js对象，也可以是一个数组--在数组中位置居后的样式对象比前面的优先级更高，这样可以间接实现样式的继承。
 *
 */

/**
 * 在实际开发中组件的样式会越来越复杂，推荐使用StyleSheet.create来集中定义组件的样式
 */
import React ,{Component} from 'react'
import {StyleSheet,Text,View} from 'react-native'

export default class LotsOfStyles extends Component{

    render(){
        return (
            <View>
                <Text style={ styles.red }>just red</Text>
                <Text style={ styles.bigblue }>just bigblue</Text>
                <Text style={ [styles.bigblue,styles.red] }>bigblue,then red</Text>
                <Text style={ [styles.red,styles.bigblue] }>red,then bigblue</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bigblue:{
        color:'blue',
        fontWeight:'bold',
        fontSize:30
    },
    red:{
        color:'red'
    }
});
