/**
 * 使用Flexbox布局
 *
 *在React Native中使用flexbox规则来指定某个组件的子元素的布局。flexbox可以在不同屏幕尺寸上提供一致的布局结构
 * 一般来说，使用flexDirection、alignItems和justifyContent三个样式属性就已经能满足大多数布局需求。
 *
 * 注意：React Native中的Flexbox的工作原理和web上的css基本一致，当然也存在少许差异。
 * 首先是默认值不同 flexDirection的默认值是column而不是row
 * flex也只能指定一个数值
 *
 *
 */


import React,{Component} from 'react'
import {View} from 'react-native'

/**
 * Flex Direction
 * 在组件的style中指定flexDirection可以决定布局的主轴方向。即子元素是应该沿着水平轴row方向排列，
 * 还是沿着竖直轴column方向排列，默认是column方向
 */
class FlexDirectionBasics extends Component{

    render(){

        return (
            <View style={{flex:1,flexDirection:'row'}}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            </View>
        );
    }
}

/**
 * Justify Content
 * 在组件的style中指定justifyContent可以决定子元素沿着主轴的排列方式。
 * 子元素是应该靠近主轴的起端还是末尾，亦或者均匀分布。
 * flex-start center flex-end space-around space-between
 */
class JustifyContentBasics extends Component{

    render(){
        return (
            <View
                style={
                    {flex:1,flexDirection:'row',justifyContent:'space-between'}
                }
            >
                <View style={{width: 50, height: 50, backgroundColor: 'red'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'yellow'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'blue'}} />
            </View>
        );
    }
}

/**
 * Align Items
 * 在组件的style中指定alignItems可以决定其子元素沿着次轴(与主轴垂直的轴，如主轴方向为row，则次轴方向为column)
 * 的排列方式。
 *
 * 对应取值：flex-start center flex-end stretch
 * 注意：要是stretch选项生效，子元素在次轴方向上不能有固定的尺寸。
 */
class AlignItemsBasics extends Component{

    render(){

        return (
            <View
                style={
                    {flex:1,flexDirection:'column',justifyContent:'center',alignItems:'stretch'}
                }
            >
                <View style={{ height: 50, backgroundColor: 'red'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'green'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'blue'}} />
            </View>
        );
    }
}

export default AlignItemsBasics
