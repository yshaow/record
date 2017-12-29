/**
 * 大多数组件在创建的时候就可以使用各种参数来进行定制，用于定制的这些参数就称为props属性
 */
import React from 'react'
import {Image,Text,View} from 'react-native'

/**
 * Image组件(内置组件) 使用props属性
 */
class Bananas extends React.Component{

    render(){
        /**
         * 注意：在iOS上使用http链接的图片地址可能不会显示 参考：https://segmentfault.com/a/1190000002933776处理
         * @type {{uri: string}}
         */
        const pic = { uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'};

        return (
            <Image source={ pic } style={ {width:193,height:110} }/>
        );
    }
}

/**
 * 自定义组件 使用props属性 提高自定义组件的复用性
 */
class Greeting extends React.Component{

    render(){

        return <Text>Hello {this.props.name}</Text>
    }
}

class DefineComponent extends React.Component{

    render(){

        return (
            <View style={ {alignItems:'center'} }>
                <Greeting name="Rexxar"/>
                <Greeting name="Jaina"/>
                <Greeting name="Valeera"/>
            </View>
        );
    }
}

export default DefineComponent
