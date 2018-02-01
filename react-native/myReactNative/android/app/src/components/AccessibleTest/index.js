/**
 * 无障碍功能
 */
import React,{Component} from 'react'
import {View,Text,DeviceEventEmitter} from 'react-native'
import NativeModules from '../NativeModules'

class AccessibleTest extends Component{

    render(){

        return (
            <View accessible={true} accessobilityLabel={ 'Tap me!' }>
                <Text  >text one</Text>
                <View>
                    <Text onPress={this.callNative.bind(this)}>当你点我的时候会调用原生方法，原生方法延迟3s后会向前端发送事件。前端一直在监听该事件，如果收到，则给出alert提示!  </Text>
                </View>
            </View>
        );
    }

    componentDidMount(){
        //NativeModules.show('Awesome',NativeModules.SHORT)

        // NativeModules.measureLayout(100,100, msg => console.log(msg) , (x,y,width,height) => {
        //     console.log(x + ':' + y + ':' + width + ':' + height);
        // })

        //this.measureLayoutPromise();
        //DeviceEventEmitter.addListener('EventName',this.eventEmit);

        NativeModules.pickImage()
            .then(msg => {
                //成功 uri.toString()
                alert(msg);
            }).catch( err => {
              alert(err);
        })
    }

    async measureLayoutPromise(){
        try{
            var {
                relativeX,
                relativeY,
                width,
                height,} = await NativeModules.measureLayoutPromise(100,100);
            console.log(relativeX + ':' + relativeY + ':' + width + ':' + height);
        }catch (e) {
            console.error(e);
        }
    }

    eventEmit(e){

        alert('Send success');
        console.log(e);
    }

    callNative(){
        NativeModules.eventTest();
    }
}

export default AccessibleTest
