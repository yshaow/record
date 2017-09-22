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



export default null;
