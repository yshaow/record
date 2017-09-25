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
 *
 */

//export default widthSubscription

































