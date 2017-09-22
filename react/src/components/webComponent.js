/**
 * 使用Web Components
 */
import React from 'react'
import ReactDOM from 'react-dom'


/****************在Web Component中使用React******************/
//定义web component
const proto = Object.create(HTMLElement.prototype,{
    attachedCallback:{
        value:function(){
            const mountPoint = document.createElement('span');
            this.createShadowRoot().appendChild(mountPoint);

            const name = this.getAttribute('name');
            const url = 'https://www.google.com/search?q=' + encodeURIComponent(name);
            ReactDOM.render(<a href= {url}>{name}</a>,mountPoint);
        }
    }
});
document.registerElement('x-search',{prototype:proto});

/****************在React中使用Web Components******************/
class HelloMsg extends React.Component{
    render(){
        return <div>Hello <x-search>{ this.props.name }</x-search>!</div>
    }
}

export default HelloMsg;
