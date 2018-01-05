/**
 * Hello Navigation
 */
import React from 'react'
import {Text,View,Button} from 'react-native'
import {StackNavigator} from 'react-navigation'
import NestNavigationTest from '../NestNavigationTest'

class HomeScreen extends React.Component{
    static navigationOptions = {
        title:'Welcome',
    }

    render(){
        const {navigate} = this.props.navigation;

        return (

            //避免导航器无法显示  给容器使用flex:1
            <View style={{flex:1}}>
                <Text>Hello,Navigation!</Text>
                {/*传递参数*/}
                <Button title="Chat with Lucy" onPress={ () => navigate('Chat',{user:'Lucy'})}/>

                {/*在组件中嵌套导航器*/}
                <NestNavigationTest navigation={this.props.navigation}/>
            </View>
        )
    }
}

/**
 * 为了把NestNavigationTest的导航链接到导航树上，我们需要把NestNavigationTest的router给HomeScreen的router。
 * 这使得HomeScreen“导航感知”，即告诉父导航器将导航对象传递下去。由于HomeScreen的router被子组件NestNavigationTest的
 * router覆盖，这个子组件将接受navigation props。
 */
HomeScreen.router = NestNavigationTest.router;

class ChatScreen extends React.Component{
    static navigationOptions = ({navigation}) => {
        const {user} = navigation.state.params;

        return {
            title:`${user}`,
            headerRight:<Button title={user} onPress={ () => navigation.setParams({user:'none'})}/>
        }
    }

    render(){
        //获取参数
        const {params} = this.props.navigation.state;

        return (
            <View>
                <Text>Chat with {params.user}</Text>
            </View>
        );
    }
}

const SimpleApp = StackNavigator({
    Home:{
        screen:HomeScreen
    },
    Chat:{
        screen:ChatScreen
    }
});

//嵌套导航 -- 将导航器嵌套在屏幕中 该导航器内容将沾满整个屏幕
const NestNavigation = StackNavigator({
    Home:{
        screen:NestNavigationTest,
        navigationOptions:{
            title:'My Chats'
        }
    },
    Chat:{screen:ChatScreen}
});

/**
 * 嵌套导航器 -- 在组件中嵌套导航器
 *
 * 有时候需要嵌套包装在组件中的导航器。该导航器只占有屏幕的一部分的情况下非常有用
 *
 * 为了将子导航器链接到导航树种，需要父导航器的属性navigation
 */
const NestNavigationComponent = StackNavigator({
    Home:{
        screen:HomeScreen
    },
    Chat:{screen:ChatScreen}
});
export default NestNavigationComponent
