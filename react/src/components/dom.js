/**
 * DOM元素测试
 */
import React from 'react'

/**********dangerouslySetInnerHTML -- XSS攻击 ***********/
function TestDangerouslySetInnerHTML(){
    return <div dangerouslySetInnerHTML={ {__html:"<span>DANGEROUS XSS</span>"} }/>
}

/***********htmlFor*********/
function TestHtmlFor(){
    return <label htmlFor="test" style={ {display:"block"} }><input type="text" id="test"/></label>
}

/**************suppressContentEditableWarning**************/
function TestContentEditable(){
    return <div contentEditable suppressContentEditableWarning>haha</div>
}
export default TestContentEditable;
