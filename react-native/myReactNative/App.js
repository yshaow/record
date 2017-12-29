/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Android from './android/app/src'
import {
  Platform,
  StyleSheet,
  Text,
  View,
    PixelRatio,
    ScrollView
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: <Android/> //'Double tap R on your keyboard to reload,\n Shake or press menu button for dev menu',
});

/**
 *
 * View组件测试
 */
class ViewTest extends Component{

  render(){
    return (
        <View style={ styles.viewContainer} >
          <View style={[styles.item,styles.center]}><Text style={ styles.font}>酒店</Text></View>
          <View style={[styles.item,styles.lineLeft]}>
            <View style={[styles.item,styles.center,styles.lineBottom]}><Text style={ styles.font}>海外酒店</Text></View>
            <View style={[styles.item,styles.center]}><Text style={ styles.font}>特惠酒店</Text></View>
          </View>
          <View style={[styles.item,,styles.lineLeft]}>
            <View style={[styles.item,styles.center,styles.lineBottom]}><Text style={ styles.font}>团购</Text></View>
            <View style={[styles.item,styles.center]}><Text style={ styles.font}>客栈，公寓</Text></View>
          </View>
        </View>
    );
  }
}

/**
 * Text组件测试
 * @param props
 * @return {XML}
 * @constructor
 */
const Header = props =>{

    return (
        <View style={styles.textHeader}>
            <Text style={styles.textFont}>
                <Text style={{color:'#cd1d1c'}}>网易</Text>
                <Text style={{color:'#fff',backgroundColor:'#cd1d1c'}}>新闻</Text>
                <Text>有态度</Text>
            </Text>
        </View>
    );
}

const List = ({items}) => {

    return (
        <View>
            {
                items.map( (item,index) => (
                    <View style={styles.list_item} key={index}>
                        <Text style={ {fontSize:16} } numberOfLines={1}>{item}</Text>
                    </View>
                ))
            }
        </View>
    );
}

class ImportantNews extends Component{

    render(){
        const news = this.props.news;
        let newItems = news.map( item => {

            return (
                <Text
                    //添加点击事件
                    onPress={this.show.bind(this,item)}
                    //设置最多行数  超出用省略号代替
                    numberOfLines={1}
                    style={styles.news_item}
                    key={item}
                >{item}</Text>
            );
        })

        return (
            <View>
                <Text style={styles.news_title}>今日要闻</Text>
                {newItems}
            </View>
        );
    }

    show(title){
        alert(title);
    }
}

class TextTest extends Component{
    constructor(props,contexts){
        super(props,contexts);

        this.state = {
            items:['一线城市楼市退烧 有房源一夜跌价160万一线城市楼市退烧 有房源一夜跌价160万','上海市民称墓地太贵买不起 买房存骨灰','朝鲜再发视频：摧毁青瓦台 一切化作灰烬','生活大爆炸人物原型都好牛逼'],
            news:[],
        }
    }

    render(){
        return (
            <View style={styles.flex}>
                <Header/>
                <List items={this.state.items}/>
                <ImportantNews news={this.state.items}/>
            </View>
        )
    }
}


/**
 * Navigator组件测试
 */
class NavigatorList extends Component{

    pressButton(){
        //<route.component {...route.params} navigator={navigator}/> 这里传入navigator
        const {navigator} = this.props;
        if(!navigator) return;

        //跳转到详情页面
        navigator.push({name:'Detail',component:Detail});

    }

    render(){

        return (
            <ScrollView style={styles.flex}>
                <Text style={styles.list_item} onPress={this.pressButton.bind(this)}>豪华邮轮济南岛3日游</Text>
                <Text style={styles.list_item} onPress={this.pressButton.bind(this)}>豪华邮轮台湾3日游</Text>
                <Text style={styles.list_item} onPress={this.pressButton.bind(this)}>豪华邮轮地中海3日游</Text>
            </ScrollView>
        );
    }
}

class Detail extends Component{

    pressButton(){
        const {navigator} = this.props;
        if(!navigator) return;

        //把当前页面的记录pop掉，就返回到了上面页面了
        navigator.pop();
    }

    render(){

        return (
            <ScrollView style={styles.flex}>
                <Text style={styles.list_item} onPress={this.pressButton.bind(this)}>我是详情页，咬我啊！</Text>
            </ScrollView>
        )
    }
}

// class NavigatorTest extends Component{
//
//     render(){
//
//         return (
//             <Navigator
//                 //指定初始路由组件
//                 initialRoute={{name:'initRoute',component:NavigatorList}}
//                 //配置场景 -- 路由切换的动画
//                 // configureScene={
//                 //     //查看动效 react-native/libraries/customComponents/
//                 //     route => Navigator.SceneConfigs.VerticalDownSwipeJump;
//                 //   }
//                 renderScene = {
//                     (route,navigator) => <route.component {...route.params} navigator={navigator}/>
//                   }
//             />
//         )
//     }
// }




export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        {/*<Text style={styles.welcome}>*/}
          {/*Welcome to React Native!*/}
        {/*</Text>*/}
        {/*<Text style={styles.instructions}>*/}
          {/*To get started, edit App.jsxiee*/}
        {/*</Text>*/}
        {/*<Text style={styles.instructions}>*/}
          {/*{instructions}*/}
        {/*</Text>*/}
        {/*<ViewTest/>*/}
          {/*<TextTest/>*/}
          {/*<NavigatorTest/>*/}
          {instructions}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',

      /*修改*/
      flex:1,
      backgroundColor:'#f5f5f5',
      /*View*/
      //flexDirection:'row',
      //alignItems:'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  viewContainer:{
      backgroundColor:'#ff0067',
      height:84,
      flex:1,
      flexDirection:'row',
      marginLeft:5,
      marginRight:5,
      borderRadius:5,
      padding:2
  },
    item:{
      flex:1,
    },

    center:{
        justifyContent:'center',
        alignItems:'center'
    },

    font:{
        color:'#fff',
        fontSize:16,
        fontWeight:'bold'
    },

    lineLeft:{
        borderLeftWidth:1/PixelRatio.get(),//得到最小线宽
        borderColor:'#fff'
    },

    lineBottom:{
        borderColor:'#fff',
        borderBottomWidth:1/PixelRatio.get()
    },

    flex:{
      flex:1,
    },

    textFont:{
      fontSize:25,
        fontWeight:'bold',
        textAlign:'center'
    },

    textHeader:{
        marginTop:25,
        height:50,
        borderBottomWidth:3/PixelRatio.get(),
        borderBottomColor:'#ef2d36',
        alignItems:'center'
    },
    list_item:{
        height:40,
        marginLeft:10,
        marginRight:10,
        borderBottomWidth:1,
        borderBottomColor:'#ddd',
        justifyContent:'center'
    },
    news_title:{
        fontSize:20,
        fontWeight:'bold',
        color:'#CD1D1C',
        marginLeft:10,
        marginTop:15
    },
    news_item:{
        marginLeft:10,
        marginRight:10,
        fontSize:15,
        lineHeight:30
    }
});
