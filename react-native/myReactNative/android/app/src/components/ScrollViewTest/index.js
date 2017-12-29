/**
 * 使用滚动视图
 *
 * ScrollView是一个通用的可滚动的容器，你可以在其中放入多个组件和视图，而且这些组件并不需要是同类型的。
 * ScrollView不仅可以垂直滚动还能水平滚动(通过horizontal属性来设置)。
 *
 * 注意：ScrollView适合用来显示数量不多的滚动元素。放置在ScrollView中的所有组件都会被渲染，哪怕有些组件因为内容太长被挤出来屏幕外。
 * 如果需要显示较长的滚动列表，那么应该使用功能差不多但性能更好的ListView组件。
 */

import React,{Component} from 'react'
import {ScrollView,Text,View} from 'react-native'

export default class ScrollViewTest extends Component{

    render(){
        let arr = [];
        for(let i = 0; i<100;i++){
            arr.push(<Text style={{lineHeight:15,fontSize:10,textAlign:'center'}} key={i}>{i}</Text>)
        }

        return (
            // 换成View组件无法滚动
            <ScrollView>
                { arr }
            </ScrollView>
        )
    }
}

