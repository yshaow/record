/**
 * 嵌套导航
 */
import React ,{Component} from 'react'
import {TabNavigator} from 'react-navigation'
import {Text,View,Button} from 'react-native'

class RecentChatsScreen extends Component{

    render(){
        const {params} = this.props.navigation.state;

        return (
            <View>
                <Text>List of recent chats,from {params ? params.user : 'default'}</Text>
                <Button title="Chat with Lucy" onPress={ () => this.props.navigation.navigate('Chat',{user:'Lucy'})}/>
            </View>
        );
    }
}

class AllContactsScreen extends Component{

    render(){
        return (
            <View>
                <Text>List of all contacts</Text>
                <Button title="to Recent" onPress={ () => this.props.navigation.navigate('Recent',{user:'all'})}/>
            </View>
        )
    }
}

const MainScreenNavigator = TabNavigator({
    Recent:{screen:RecentChatsScreen},
    All:{screen:AllContactsScreen}
});

export default MainScreenNavigator





























