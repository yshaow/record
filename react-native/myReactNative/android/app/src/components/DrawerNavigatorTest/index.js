/**
 * DrawerNavigator
 */
import React ,{Component}from 'react'
import {View,Text,Button} from 'react-native'
import {DrawerNavigator} from 'react-navigation'
//import Ionicons from 'react-native-vector-icons/Ionicons'

// const HomeScreen = ({navigation}) => (
//     <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
//         <Text>Home Screen</Text>
//         {/*要打开抽屉，可以从屏幕左边缘向右滑动，也可以用代码实现*/}
//         {/*<Button title="Open Drawer" onPress={() => navigation.navigate('DrawerToggle')}/>*/}
//     </View>
// );
//
// const ProfileScreen = () => (
//     <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
//         <Text>Profile Screen</Text>
//     </View>
// );
//
//
// const configs = {}
// //创建
// const RootDrawer = DrawerNavigator({Home:{
//             screen:HomeScreen,
//             // navigationOptions:{
//             //     drawerLabel:'主页',
//             //     //drawerIcon: ({focused,tintColor}) => (<Ionicons name={focused ? 'ios-home' : 'ios-home-outline'} size={20} style={{color:tintColor}}/>)
//             // }
//         }, Profile:{
//             screen:ProfileScreen,
//             // navigationOptions:{
//             //     drawerLabel:'个人',
//             //     //drawerIcon: ({tintColor,focused}) => (<Ionicons name={focused ? 'ios-person' : 'ios-person-outline'} size={20} style={{color:tintColor}}/>)
//             // }
//         }},configs);

class MyHomeScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Home',
    };

    render() {
        alert(JSON.stringify(this.props.navigation));
        return (
            <Button
                onPress={() => this.props.navigation.navigate('Notifications')}
                title="Go to notifications"
            />
        );
    }
}

class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Notifications',
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.goBack()}
                title="Go back home"
            />
        );
    }
}

const MyApp = DrawerNavigator(
    {
        Home: {screen: MyHomeScreen},
        Notifications: {screen: MyNotificationsScreen},
    }
);

export default MyApp