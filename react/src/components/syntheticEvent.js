/**
 * 事件系统测试
 */
import React from 'react'

function TestSyntheticEventObj(){
    function handle(e){
        console.log(e.clipboardData);
    }
    return <button onCopy={ handle }>事件系统对象属性</button>
}

export default TestSyntheticEventObj;