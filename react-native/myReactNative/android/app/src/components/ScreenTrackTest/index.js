/**
 * 屏幕追踪
 */
import React from 'react'
import {View,Text} from 'react-native'
import {StackNavigator} from 'react-navigation'

const Home = props => {

    return (
        <View>
            <Text>Home</Text>
        </View>
    );
}
Home.navigationOptions={
    title:'个人中心'
}

const Detail = props => {

    return (
        <View>
            <Text>Detail</Text>
        </View>
    );
}

Detail.navigationOptions={
    title:'详情'
}

const StackContainer = StackNavigator({
    Home:{screen:Home},
    Detail:{screen:Detail}
});


//追踪
import {GoogleAnalyticsTracker} from 'react-native-google-analytics-bridge'
const tracker = new GoogleAnalyticsTracker('google-analytics-id');

function getCurrentRouteName(navigationState){
    if(!navigationState) return null;

    const route = navigationState.routes[navigationState.index];
    if(route.routes) return getCurrentRouteName(route);
    return route.routeName;
}

const ScreenTrack = props => {

    return (
        <StackContainer
            onNavigationStateChange = {
                (prevState,currentState) => {
                    const currentScreen = getCurrentRouteName(currentState);
                    const prevScreen = getCurrentRouteName(prevState);

                    if(prevScreen !== currentScreen){
                        tracker.trackScreenView(currentScreen);
                    }
                }

            }
        />
    );
}

export default ScreenTrack
