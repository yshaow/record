/**
 * 高阶组件
 */
import React from 'react'

/**
 * 接受外部数据源 渲染评论列表的组件
 */
class CommentList extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            comments:Datasource.getComments()
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        DataSource.addChangeListener(this.handleChange);
    }

    componentWillUnmount(){
        DataSource.removeChangeListener(this.handleChange);
    }

    handleChange(){
        this.setState({
            comments:DataSource.getComments()
        });
    }

    render(){
        return <div>
                    {
                        this.state.comments.map(comment => <Comment comment={comment} key={ comment.id} />)
                    }
                </div>
    }
}

/**
 * 订阅单个博文的组件
 */
class BlogPost extends React.Component{
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            blogPost:DataSource.getBlogPost(props.id)
        }
    }

    componentDidMount(){
        DataSource.addChangeListener(this.handleChange);
    }

    componentWillUnmount(){
        DataSource.removeChangeListener(this.handleChange);
    }

    handleChange(){
        this.setState({
            blogPost:DataSource.getBlogPost(this.props.id)
        });
    }

    render(){
        return <TextBlock text={ this.state.blogPost}/>
    }
}

/**
 * CommentList和BlogPost是等价的，除了它们调用DataSource的不同方法，有不同的输出。但它们大部分的实现是类似的
 *      组件mount结束后，都添加DataSource的change监听
 *      除了监听函数，无论什么时候dataSource改变之后，都会调用setState
 *      组件unmount之后，都会移除监听
 *
 * 把公共的部分抽象出来，使得我们在一个地方定义逻辑并且在我们的组件中共享 -- 这就是高阶组件的优点
 *      我们可以写一个函数，能够创建类似于CommentList和BlogPost这类订阅DataSource的新的组件。这个函数接收
 *      一个子组件作为参数，这个子组件接受订阅数据源作为props，调用withSubscription
 */
const CommentListWidthSubscription = withSubscription(CommentList,DataSource => DataSource.getComments());
const BlogPostWidthSubscription = withSubscription(BlogPost,(DataSource,props) => DataSource.getBlogPost(props.id));

/**
 *
 * @param WrappedComponent 被包含的组件
 * @param selectData 函数--根据给定的DataSource和当前props取回我们需要的数据
 */
function widthSubscription(WrappedComponent,selectData){

    return HigherComponents;
}

/**
 * 当 CommentListWidthSubscription与BlogPostWidthSubscription被渲染的时候，CommentList和BlogPost将会
 * 被传递data属性，其中包含从DataSource取回的最新数据
 */
class HigherComponents extends React.Component{

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            data:selectData(DataSource,props)
        }
    }

    componentDidMount(){
        DataSource.addChangeListener(this.handleChange);
    }

    componentWillUnmount(){
        DataSource.removeChangeListener(this.handleChange);
    }

    handleChange(){
        this.setState({
            data:selectData(DataSource,this.props)
        });
    }

    render(){
        //被包裹的元素接收container的所有props和新的props，并使用其渲染输出。
        //高阶组件并不关心数据将会如何或者为什么使用，并且被包裹的元素并不关心数据的源头
        return <WrappedComponent data={this.state.data} {...this.props }/>;
    }
}
/**
 * 结果：高阶组件既不会修改输入组件，也不会通过继承来复制行为。相反，通过包裹的形式，高阶组件
 *       将原先的组件组合在container组件中。高阶组件是纯函数，没有副作用。
 */


/*******************注意事项**********************/

/**
 * 1.不要改变原始组件，而是使用组合
 *      在高阶组件中要避免修改组件原型
 */
//如下：就修改了原型
function LogProps(InputComponent){
    InputComponent.prototype.componentWillReceiveProps = function(nextProps){
        console.log(nextProps);
    }
    return InputComponent;
}
//相比于修改，高阶组件最好是通过输入组件包裹在容器组件的方式来使用组合
function LogProps(WrappedComponent){
    return class extends React.Component {
        componentWillReceiveProps(nextProps){
            console.log(nextProps);
        }
        render(){
            return <WrappedComponent {...this.props}/>;
        }
    }
}
//上面的高阶组件与之前的修改原型的版本有着相同的功能，但又避免了潜在的冲突可能
//高阶组件和容器组件的模式有相同之处，容器组件是分离责任策略的一部分，这个分离策略是关于
//高层次和低层次关注点之间的责任分离。容器管理着类似订阅和状态这类东西，和给组件传递属性来处理类似渲染UI这类事情。
//高阶组件使用容器作为其实现的一部分。可以将高阶组件视为定义参数化容器组件。

/**
 * 2.约定：给包裹组件传递不相关的属性Props -- 帮助确定高阶组件能够足够的灵活和可以被重用
 *      高阶组件可以向组件添加功能，它不应该大幅度地改变功能，期望的是高阶组件返回的组件和被包裹的组件具有相似的界面
 */
//高阶组件应该通过props传递那些与特定功能无关的特性，大多数的高阶组件包含如下的render函数
render(){
    //过滤掉与高阶函数功能相关的props属性
    const {extraProp,...passThroughProps} = this.props;
    //向包裹组件注入props属性，一般是高阶组件的state状态或实例方法
    const injectedProp = someStateOrInstanceMethod;
    //向包裹组件传递props顺序
    return <WrappedComponent injectedProp={injectedProp} {...passThroughProps}/>
}

/**
 * 3. 约定：最大化组合
 */
//不是所有的高阶组件看起来都是一样的，有时候，它接受包裹组件作为单一参数
const NavbarWithRouter = withRouter(Navbar);
//通常情况下，高阶组件接受其他参数
const CommentWidthRelay = Relay.createContainer(Comment,config);
//高阶组件最常见的签名
const ConnectedComment = connect(commentSelector,commentActions)//返回一个函数 -- 高阶组件
                            (CommentList);//调用高阶组件

/**
 * 4.约定：为了方便调式 包装显示名称
 *      由于高阶属性创建的容器组件在React开发者工具中显示通其他的组件相似，为了方便调式，选择一个显示名称display name,表示它是高阶组件的结果。
 */
//最常见的方法是给被包裹元素包裹一个显示名称display name。因此如果你的高阶组件名字为widthSubscription,被包裹的元素名称为CommentList，那就选择名称为
//WidthSubscription(CommentList)
function widthSubscription(WrappedComponent){
    class WidthSubscription extends  React.Component{};

    WidthSubscription.displayName = `WidthSubscription(${getDisplayName(WrappedComponent)})`

    return WidthSubscription;
}
function getDisplayName(WrappedComponent){
    return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

/**
 * 5. 警告
 */
// 5.1不要再render函数中使用高阶组件
/**
 * React的diff算法又称为reconciliation使用组件标识符来决定是否应该更新已有的子树或将其抛弃并安装新的子树。
 * 如果从render返回的组件等同于(===)之前的render函数返回的组件，React将会迭代地通过diff算法更新子树到新的子树
 * 如果不相等则先前的子树将会完全卸载
 */
//通常情况下，不需要考虑这些，但是这对于高阶组件非常重要，因为这意味着你在组件的render方法不能通过高阶组件产生
render(){
    //每次render函数调用都会创建一个新的EnhancedComponent实例
    const EnhancedComponent = enhance(MyComponent);
    //每一次都会使得子对象完全被移除
    return <EnhancedComponent />
}
//在组件定义外应用高阶组件，以便于生成的组件只会被创建一次，然后他的标识符在每次渲染中都是相同的。

//5.2静态方法必须复制
//当你将一个组件应用于高阶组件时，虽然原有的组件被容器组件所包裹，但这也意味着新的组件没有之前组件的静态函数
//定义静态方法
WrappedComponent.staticMethod = function(){}

//使用高阶组件
const EnhancedComponent = enhance(WrappedComponent);
EnhancedComponent.staticMethod === 'undefined'//true

//复制原有的静态方法
function enhance(WrappedComponent){
    class Enhance extends React.Component{}

    //复制
    Enhance.staticMethod = WrappedComponent.staticMethod;

    return Enhance;
}
//然而，上面的代码需要明确的晓得什么方法需要复制，可以使用hoist-non-react-statics来自动复制非React的静态方法
import hoistNonReactStatic from 'hoist-non-react-statics';
function enhance(WrappedComponent) {
    class Enhance extends React.Component {/*...*/}
    hoistNonReactStatic(Enhance, WrappedComponent);
    return Enhance;
}
//另一个有效的方法是将静态方法与组件本身相分离
//将：
MyComponent.someFunction = someFunction;
export default  MyComponent;
//换成：
export {someFunction};
import MyComponent,{someFunction} from './MyComponent';

//5.3 Refs不会被传递
/**
 * 高阶组件会给被包裹的组件传递所有的属性，但是不会传递refs。因为ref不是一个属性，就像key一样，它是由React特殊处理的。如果
 * 你给高阶组件产生的组件一个元素添加ref，ref引用的是外层容器组件的实例，而不是被包裹的组件。
 *
 * 最好的解决方法是避免使用ref，props是更好的选择
 */
function Field({inputRef,...rest}){
    return <input ref={inputRef} {rest}/>;
}
//在高阶组件中增强Field组件
const EnhancedFiled = enhance(Field)；

//通过props传递ref
<EnhancedFiled inputRef = {input =>{
    this.input = input;
}}/>

//export default widthSubscription

































