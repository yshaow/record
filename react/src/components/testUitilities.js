/**
 * Test Utilities
 */

import React from 'react'
//引入Test 工具
import ReactTestUtils from 'react-dom/test-utils'

/****************Simulate******************/
class SimulateTest extends React.Component{
    render(){
        return <div>
            <button onClick={ (e)=> console.log(e[0])} ref= { (el) => this.btn = el}>测试</button>
            <input ref="input" onChange={ e => console.log(e)}/>
        </div>
    }

    componentDidMount(){
        ReactTestUtils.Simulate.click(this.btn,"a");//触发点击事件

        const node = this.refs.input;
        node.value = 'giraffe';
        ReactTestUtils.Simulate.change(node);
        ReactTestUtils.Simulate.keyDown(node, {key: "Enter", keyCode: 13, which: 13});
    }
}

/**************renderIntoDocument*****************/
class RenderIntoDocumentTest extends React.Component{
    render(){
        return <div>
            <button onClick={ (e)=> console.log(e[0])} ref= { (el) => this.btn = el}>测试</button>
        </div>
    }
}

function testRenderIntoDocument(){
    let result = ReactTestUtils.renderIntoDocument(<RenderIntoDocumentTest/>);
    console.log(result);
}

/**************mockComponent*****************/
class MockComponent extends React.Component{

    render(){
        return <span>mockComponent test</span>
    }
}

function testMockComponent(){
    var result = ReactTestUtils.mockComponent(MockComponent);
    console.log(result);
}

/**************isElement*****************/
class IsElementTest extends React.Component{
    render(){
        return <div ref="test">测试</div>
    }

    componentDidMount(){
        console.log(ReactTestUtils.isElement(<MockComponent/>));
    }
}

/**************isElementOfType*****************/
class IsElementOfTypeTest extends React.Component{
    render(){
        return <div ref="test">测试</div>
    }

    componentDidMount(){
        console.log(ReactTestUtils.isElementOfType(<MockComponent/>,MockComponent));
    }
}
/**************isDOMComponent*****************/
class IsDOMComponentTest extends React.Component{
    render(){
        return <div ref="test" className="test">测试</div>
    }

    componentDidMount(){
        console.log(ReactTestUtils.isDOMComponent(this.refs.test));
    }
}

/**************isCompositeComponent*****************/
class IsCompositeComponentTest extends React.Component{
    render(){
        return <IsDOMComponentTest ref="test"/>
    }

    componentDidMount(){
        console.log(ReactTestUtils.isCompositeComponent(this.refs.test));
    }
}
/**************isCompositeComponentWithType*****************/
class IsCompositeComponentWithTypeTest extends React.Component{
    render(){
        return <IsDOMComponentTest ref="test"/>
    }

    componentDidMount(){
        console.log(ReactTestUtils.isCompositeComponentWithType(this.refs.test,IsCompositeComponentTest));
    }
}
/**************findAllInRenderedTree*****************/
class FindAllInRenderedTreeTest extends React.Component{
    render(){
        return <IsCompositeComponentWithTypeTest ref="test"/>
    }

    componentDidMount(){
        var result = ReactTestUtils.findAllInRenderedTree(this.refs.test,function(component){
            //过滤组件 返回true的 组件返回
            return component
        });
        console.log(result);
    }
}

/**************scryRenderedDOMComponentsWithClass*****************/
class ScryRenderedDOMComponentsWithClassTest extends React.Component{
    render(){
        return <IsCompositeComponentWithTypeTest ref="test"/>
    }

    componentDidMount(){
        var result = ReactTestUtils.scryRenderedDOMComponentsWithClass(this.refs.test,"test");
        console.log(result);
    }
}
/**************findRenderedComponentWithType*****************/
class FindRenderedComponentWithTypeTest extends React.Component{
    render(){
        return <IsCompositeComponentWithTypeTest ref="test"/>
    }

    componentDidMount(){
        var result = ReactTestUtils.findRenderedComponentWithType(this.refs.test,IsDOMComponentTest);
        console.log(result);
    }
}
//export default FindRenderedComponentWithTypeTest;














