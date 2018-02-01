/**
 * Animated 动画测试
 */
import React,{Component} from 'react'
import {Animated,Text} from 'react-native'

/**
 * 淡入动画效果
 */
class FadeInView extends Component{

    constructor(props){
        super(props);
        this.state = {
            fadeAnim:new Animated.Value(0)//透明度初始值为0
        }
    }

    componentDidMount(){
        Animated.timing(//随时间变化而执行的动画类型
            this.state.fadeAnim,{
                toValue:1,//透明度最终值
                duration:3000,
                easing:Easing.back
            }
        ).start();//开始执行动画

    }

    render(){
        return(
            <Animated.View //可动画的视图组件
                style={{...this.props.style,
                    opacity:this.state.fadeAnim //将透明度指定为动画变量值
                }}>
                {this.props.children}
            </Animated.View>
        );

    }
}

/**
 * 然后就可以在组件中像使用View那样去使用FadeInView组件
 */
class FadeInTest extends Component{

    render(){
        return (
            <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
                <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
            </FadeInView>
        );
    }
}

export default FadeInTest
