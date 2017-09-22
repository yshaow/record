/**
 * 列表与keys
 * 在jsx中数组通过{}引入即可
 */

import React from 'react'
/**
 * 基于列表的组件
 * keys在兄弟元素之间需要唯一，然而它们不需要全局唯一，在两个不同的数组中时我们可以利用相同的keys
 */
function NumberList(props) {
    return <ul>
                {
                    props.numbers.map(val=><li key={val}>{val}</li>)//必须提供一个key
                }
           </ul>
}

export default NumberList;

