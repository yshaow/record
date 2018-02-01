/**
 * Tab router test
 */
import React from 'react'
import {View,Text} from 'react-native'
import {TabRouter,TabNavigator,StackRouter} from 'react-navigation'

const Home = props => (
    <View>
        <Text>Home</Text>
    </View>
);

const Profile = props => (
    <View>
        <Text>Profile</Text>
    </View>
);

const Detail = props => (
    <View>
        <Text>Detail</Text>
    </View>
);


const TabRouterContainer = StackRouter({
    Home:{screen:Home},
    Profile:{screen:Profile},
    Detail:{screen:Detail}
},{
    initialRouteName:'Home'
});



export default TabRouterContainer
