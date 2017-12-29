/**
 * 使用长列表组件
 *
 * React Native提供了几个适用于展示长列表数据的组件，一般而言会选FlatList或SectionList
 */

import React,{Component}from 'react'
import {FlatList,StyleSheet,Text,View,SectionList} from 'react-native'

/**
 * FlatList组件用于显示一个垂直的滚动列表，其中的元素之间结构近似而数据不同
 * FlatList更适用于长列表数据，且元素个数可以增删。和ScrollView不同的是FlatList并不立即渲染所有的元素，而是优先渲染屏幕上的可见元素。
 *
 * FlatList组件必须的两个属性：data 和 renderItem
 *      data：列表的数据源
 *      renderItem：从数据源中逐个解析数据，然后返回一个设定好格式的组件来渲染。
 */
class FlatListBasics extends Component{
    constructor(props,contexts){
        super(props,contexts);
        this.state = {
            data:[
                {key: 'Devin'},
                {key: 'Jackson'},
                {key: 'James'},
                {key: 'Joel'},
                {key: 'John'},
                {key: 'Jillian'},
                {key: 'Jimmy'},
                {key: 'Julie'},
            ]
        }
    }

    render(){

        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.data}
                    renderItem={({item}) => <Text  style={styles.item}>{item.key}</Text>}
                />
            </View>
        );
    }
}

/**
 * 如果要渲染的是一组分组的数据，也许还带有分组标签，那么SectionList将是一个不错的选择
 */
class SectionListBasics extends Component{
    constructor(props,contexts){
        super(props,contexts);
        this.state={
            sections:[
                {title: 'D', data: ['Devin']},
                {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
            ]
        }
    }

    render(){

        return (
            <View style={styles.container}>
                <SectionList
                    sections={this.state.sections}
                    renderItem ={ ({item}) => <Text style={styles.item}>{item}</Text>}
                    renderSectionHeader = {({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:22
    },
    item:{
        padding:10,
        fontSize:18,
        height:44
    },
    sectionHeader:{
        paddingTop:2,
        paddingLeft:10,
        paddingRight:10,
        paddingBottom:2,
        fontSize:14,
        fontWeight:'bold',
        backgroundColor:'rgba(247,247,247,1)'
    }
});

export default SectionListBasics

