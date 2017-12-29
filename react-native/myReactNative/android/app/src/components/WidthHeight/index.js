/**
 * 高度与宽度
 *
 * 组件的高度和宽度决定了其在屏幕上显示的尺寸
 */
import React,{Component} from 'react'
import {View} from 'react-native'

/**
 * 指定宽高
 * 最简单的给组件设定尺寸的方式就是在样式中指定固定的width和height。React Native中的尺寸都是无单位的，表示的是与
 * 设备像素密度无关的逻辑像素点
 *
 * 下面给组件设置尺寸也是一种常见的模式，比如要求在不同尺寸的屏幕上都显示成一样的大小
 */
class FixedDimensionsBasics extends Component{
    render(){

        return (
            <View>
                <View style={{width:50,height:50,backgroundColor:'powderblue'}}/>
                <View style={{width:100,height:100,backgroundColor:'skyblue'}}/>
                <View style={{width:150,height:150,backgroundColor:'steelblue'}}/>
            </View>
        );
    }
}

/**
 * 弹性Flex 宽高
 *
 * 在组件样式中使用flex可以使其在可利用的空间中动态地扩张或收缩。一般而言我们会使用flex：1来指定某个组件扩张以撑满所有
 * 剩余的空间。
 * 如果有多个并列的子组件使用flex：1，则这些子组件会平分父容器中剩余的空间。如果这些并列的子组件的flex值不一样，则谁的值
 * 更大，谁占据的剩余空间的比例就更大(即占据剩余空间的比等于并列组件间的flex值得比)
 *
 * 注意：组件能够撑满剩余空间的前提是其父容器的尺寸不为零。如果父容器即没有固定的width和height，也没有设定flex，则父容器
 * 的尺寸为零，其子组件如果使用了flex也是无法显示的。
 */
class FlexDimensionsBasics extends Component{

    render(){
        return(
            <View style={{flex:1,flexDirection:'row'}}>
                <View style={{flex: 1, backgroundColor: 'powderblue'}} />
                <View style={{flex: 2, backgroundColor: 'skyblue'}} />
                <View style={{flex: 3, backgroundColor: 'steelblue'}} />
            </View>
        );
    }
}
export default FlexDimensionsBasics
