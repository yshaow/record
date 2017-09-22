/*
 * jsx深入
 */

 import React from 'react'


/**************测试jsx中的点操作*****************/
 const MyComponent = {
     test1(props){
         return <div>测试jsx中的 "{props.ope}" 操作</div>
     },
    test2(){
         return <div >test1</div>
    },
    test3(){
        return <div>test2</div>
    }
 }

 function Test1 (){
     return <MyComponent.test1 ope="."/>
 }

 function Test2(props){
     //return <MyComponent[props.storyType] /> //错误

     //正确
     const CurrComponent = MyComponent[props.storyType];
     return <CurrComponent/>
 }

 /**************Function作为children**************/
 function Repeat(props){
     let items = [];
     for(let i=0;i<props.count;i++){
         items.push(props.children(i));
     }
     return <div>{items}</div>
 }

 function ListRepeat(){
     return <Repeat count={10}>
                { index => <div key={index}>This is item {index} in the list!</div>}
            </Repeat>
 }
 export default ListRepeat






















