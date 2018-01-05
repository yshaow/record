/**
 * React Navigation 测试
 */
import React,{Component} from 'react'
import {View,Text,Button} from 'react-native'
import {StackNavigator} from 'react-navigation'

/**
 * 其中每个screen组件都可以单独设置导航头选项 如：导航头的标题 还可以使用navigation属性中的方法跳转到别的页面
 */

class MainComponent extends React.Component {
    //设置导航头选项
    static navigationOptions = {
        title: '主页',
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>主页</Text>
                <Button
                    title="Go to Jane's profile"
                    //跳转到其他页面
                    onPress={() => navigate('Profile', { name: 'Jane' }) }
                />
            </View>
        );
    }
}

class ProfileComponent extends React.Component {
    static navigationOptions = {
        title: '个人页',
    };
    render() {
        const { navigate } = this.props.navigation;
        return <Text>profile</Text>
    }
}


const App = StackNavigator({
    Main:{screen:MainComponent},
    Profile:{screen:ProfileComponent}
});

class NavigationTest extends Component{

    render(){

        return <App/>
    }
}

export default NavigationTest

