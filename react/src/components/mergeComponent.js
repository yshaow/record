/**
 * 组件的合成 -- 推荐
 * 推荐组件使用特殊的children属性去放置其孩子元素在该组件输出的时候
 */
import React from 'react'

/**
 *使用React提供的children属性
 */
function FancyBorder (props){
    return <div>
                <h2>test</h2>
                {
                    props.children //设置组件子元素输出位置
                }
            </div>
}

function Welcome1 (){
    return <FancyBorder>
                <div>component merge test</div>
            </FancyBorder>
}
//export default Welcome1;

/**
 * 自定义属性 -- 用于需要多样的放置子元素的输出位置
 */

function Test1(){
    return <div>Test1</div>
}

function Test2(){
    return <div>Test2</div>
}

function Welcome(props){
    return <div>
                <h2>自定义属性替代children</h2>
                <div className="left" style={{float:"left"}}>
                    { props.left }
                    <span>左边</span>
                </div>
                <div className="right" style={{float:"right"}}>
                    {props.right}
                    <span>右边</span>
                </div>
            </div>
}

function App(){
    return <Welcome
            left = {<Test1/>}
            right = {<Test2/>}
          />
}

export default App;

