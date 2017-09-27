/**
 * 浅渲染 测试
 */
import React from 'react'
/*********准备组件*********/
function Subcomponent(props){
    return <span>{ props.foo }</span>
}
function MyComponent(){
    return <div>
                <span className="heading">Title</span>
                <Subcomponent foo="bar"/>
            </div>
}
/*********开始测试*********/
import ShallowRenderer from 'react-test-renderer/shallow'; // ES6

function test (){
    const shallowRenderer = new ShallowRenderer();
    //浅渲染
    shallowRenderer.render(<MyComponent/>);
    //获取输出
    const output = shallowRenderer.getRenderOutput();

    expect(output.type).toBe("div");
    expect(result.props.children).toEqual([
        <span className="heading">Title</span>,
        <Subcomponent foo="bar" />
    ]);
}

export default test;






















