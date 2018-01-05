/**
 * StackNavigator 测试
 */
import React from 'react'
import {View,Text,Button} from 'react-native'
import {StackNavigator} from 'react-navigation'

/**
 * 创建每屏视图
 */
const HomeScreen = ({navigation}) => (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text>Home Screen</Text>
        {/*从主屏幕导航到详细信息屏幕*/}
        {/*当你使用导航器注册一个组件时，组件会添加一个道具。这个道具驱动我们如何在不同的屏幕之间移动。navigation.navigate*/}
        <Button
            onPress={ () => navigation.navigate('Detail')}
            title="Go to detail"
        />
    </View>
);

const DetailScreen = () => (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text>Details Screen</Text>
    </View>
);

//创建StackNavigator
const RootNavigator = StackNavigator({
    //为每屏添加试图组件
    Home:{
        screen:HomeScreen,
        //添加导航标题
        navigationOptions:{
            headerTitle:'home'
        }
    },
    Detail:{
        screen:DetailScreen,
        navigationOptions:{
            headerTitle:'Detail'
        }
    }
},{
    initialRouteName:'Detail'
});

export default RootNavigator
