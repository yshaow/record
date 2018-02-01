/**
 * LayoutAnimation test
 */
import React from 'react'
import {NativeModules,LayoutAnimation,Text,TouchableOpacity,StyleSheet,View} from 'react-native'

//android需要启动
const {UIManager} = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

export default class App extends React.Component{
    state = {
        w:100,
        h:100
    }

    _onPress = () =>{
        //更新动画
        LayoutAnimation.spring();
        this.setState({w: this.state.w + 15, h: this.state.h + 15})
    }

    render(){

        return(
            <View style={styles.container}>
                <View style={[styles.box,{width:this.state.w,height:this.state.h}]}/>
                <TouchableOpacity onPress={this._onPress}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>点我啊！</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    box:{
        width:200,
        height:200,
        backgroundColor:'red'
    },
    button:{
        backgroundColor:'black',
        paddingHorizontal:20,
        paddingVertical:15,
        marginTop:15
    },
    buttonText:{
        color:'#fff',
        fontWeight:'bold'
    }
});
