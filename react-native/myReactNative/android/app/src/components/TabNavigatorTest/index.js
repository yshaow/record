/**
 * TabNavigator 测试
 */
import React from 'react'
import {View,Text} from 'react-native'
import {TabNavigator} from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'

const HomeScreen = ({screenProps}) => {

    return (
        <View style={ {flex:1,alignItems:'center',justifyContent:'center'} }>
            <Text>Home Screen</Text>
        </View>
    );
}

const ProfileScreen = () => (
    <View style={ {flex:1,alignItems:'center',justifyContent:'center'} }>
        <Text>Profile Screen</Text>
    </View>
);

//创建TabNavigator
const RootTabs = TabNavigator({
    Home:{
        screen:HomeScreen,
        navigationOptions:{
            tabBarLabel:'中心',
            //添加图标
            tabBarIcon: ({tintColor,focused}) => {
                //alert(tintColor)
                return <Ionicons name={ focused ? 'ios-home' : 'ios-home-outline'} size={26} style={{color:tintColor}}/>
            },
            tabBarVisible:false
        }
    },
    Profile:{
        screen:ProfileScreen,
        navigationOptions:{
            tabBarLabel:'个人',
            tabBarIcon:({tintColor,focused}) => (
                <Ionicons
                    name={focused ? 'ios-person' : 'ios-person-outline'}
                    size={26}
                    style={{color:tintColor}}
                />
            )
        }
    }
},{
    tabBarPosition:'bottom',
    swipeEnabled:false,
    animationEnabled:true,
    initialRouteName:"Profile",
    order:['Profile','Home'],
    backBehavior:'initialRoute',
    tabBarOptions:{
        // activeTintColor:'#f00',
        // activeBackgroundColor:'#f00',
        // inactiveTintColor:'#000',
        // inactiveBackgroundColor:'#fff',
        // showLabel:true,
        // style:{
        //     backgroundColor:'#666'
        // },
        // labelStyle:{
        //     backgroundColor:'#fff'
        // },
        // tabStyle:{
        //     //backgroundColor:'#f00'
        // },
        // allowFontScaling:true

        activeTintColor:'#f00',
        inactiveTintColor:'#0f0',
        showIcon:true,
        showLabel:true,
        pressColor:'#f00',
        scrollEnabled:true
    }
});

export default RootTabs