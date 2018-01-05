/**
 * 网络
 */
import React,{Component} from 'react'
import {Text} from 'react-native'

/**
 * 使用Fetch
 * React Native提供了和web标准一致的Fetch API
 */
class FetchTest extends Component{

    render(){

        return <Text onPress={this.webSocketTest.bind(this)}>点我啊</Text>
    }

    getData(){
        fetch('http://10.191.11.29/test.json')
            .then( response => response.json())
            .then( json => {
                alert(JSON.stringify(json))
            })
            .catch(err => {
                alert(err.message)
            });
    }

    /**
     *使用async / await
     */
    async getDataTest(){
        try{
            let response = await fetch('http://10.191.11.29/test.json');
            let responseJson = await response.json();

            alert(JSON.stringify(responseJson));
            return responseJson;
        }catch(err){
            alert(err.message)
        }
    }

    /**
     *
     * 使用其他的网络库
     * React Native 中已经内置了XMLHttpRequest API ，一些基于XMLHttpRequest封装的第三方库也可以使用。如：frisbee或axios
     *
     * 注意：不是所有web 中的ajax库都可以直接使用 如：jquery 因为有很多浏览器中有的RN中没有
     *
     * 安全机制与网页环境有所不同：在应用中你可以访问任何网站，没有跨域的限制
     */
    getDataAjax(){
        var request = new XMLHttpRequest();
        request.onreadystatechange = e => {
            if (request.readyState !== 4) return;

            if (request.status === 200) alert('success:' + request.responseText);
            else alert('error');
        }

        request.open('GET','http://10.191.11.29/test.json');
        request.send();
    }

    /**
     * WebSocket支持
     *      该协议可以在单个TCP连接上提供双工的通信信道
     */
    webSocketTest(){
        var ws = new WebSocket('http://10.191.11.29/test.json');
        ws.onopen = () => {
            //发送一个消息
            ws.send('something');
        }

        ws.onmessage = e=>{
            alert('接受消息：'+e.message);
        }

        ws.onerror = e => {
            alert('错误：'+e.message);
        }

        ws.onclose = e => {
            alert(e.code +'--'+ e.reason);
        }

    }
}

export default FetchTest