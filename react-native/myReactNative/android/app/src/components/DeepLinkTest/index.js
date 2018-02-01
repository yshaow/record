/**
 * 深度链接
 */
import React from 'react'
import {Text,Button,View,Platform} from 'react-native'
import {StackNavigator} from 'react-navigation'

const Home = props => {

    return (
        <View>
            <Text>Home</Text>
            <Button title="点我啊！" onPress={ () => props.navigation.navigate('Chat',{user:'小屋'})}/>
        </View>

    );
};
Home.navigationOptions = {
    title:'中心'
}

const Chat = props => {

    return (
        <Text>Chat</Text>
    );
}
Chat.navigationOptions={
    title:'聊天'
}

const SimpleApp = StackNavigator({
    Home:{screen:Home},
    Chat:{
        screen:Chat,
        path:'chat/:user'
    }
});

//添加url 前缀
class SimpleAppPrefix extends React.Component{

    render(){
        const prefix = Platform.OS === 'android' ? 'mychat://mychat/' : 'mychat://';

        return <SimpleApp uriPrefix={prefix}/>
    }
}

export default SimpleApp
