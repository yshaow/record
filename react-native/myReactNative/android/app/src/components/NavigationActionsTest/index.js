/**
 * Navigation Actions 测试
 */
import React,{Component} from 'react'
import {View,Text,Button} from 'react-native'
import {TabNavigator,NavigationActions} from 'react-navigation'

const Home = props => {
    const params = props.navigation.state.params;
    alert(params)

    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>Home {params && params.from}</Text>
        </View>
    );
};

const Detail = props => {


    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text>Detail</Text>
            <Button title="返回" onPress={ () => {
                const backRoute = NavigationActions.navigate({
                    routeName:'Home',
                    params:{from:'detail'},
                    action:NavigationActions.navigate({routeName:'Detail'})
                });

                props.navigation.dispatch(backRoute);
            }}/>
        </View>
    );
}

const TabContainer = TabNavigator({
    Home:{
        screen:Home,
        navigationOptions:{
            tabBarLabel:'主页'
        }
    },
    Detail:{
        screen:Detail,
        navigationOptions:{
            tabBarLabel:'详情'
        }
    }
},{
    tabBarPosition:'bottom'
});

export default TabContainer
