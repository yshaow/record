/**
 * React 路由测试
 */

import React from 'react'
import {BrowserRouter as Router,Route,Link,HashRouter,NavLink,Prompt} from 'react-router-dom'//引入路由

/**********************快速开始*************************/
/**
 * 定义路由
 */
const BasicExample = () =>
    <Router>
        <div>
            /**********定义路由链接***********/
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/topics">Topics</Link></li>
            </ul>

            <hr/>

            /**********定义视图显示***********/
            <Route exact path="/" component={Home}/>
            <Route path='/about' component={About}/>
            <Route path="/topics" component={Topics}/>
        </div>
    </Router>;
/**
 * 定义组件
 */
const Home = () =>
    <div>
        <h2>Home</h2>
    </div>;

// const About = () =>
//     <div>
//         <h2>About</h2>
//     </div>;

const Topics = ({match}) =>(
  <div>
      <h2>Topics</h2>
      <ul>
          <li>
              <Link to={ `${match.url}/rendering` }>Rendering width React</Link>
          </li>
          <li>
              <Link to={ `${match.url}/components` }>Components</Link>
          </li>
          <li>
              <Link to={ `${match.url}/props-v-state` }>Props v. State</Link>
          </li>
      </ul>

      <Route path={ `${match.url}/:topicId` } component={Topic}/>
      <Route exact path={match.url} render={ ()=> <h3>Please select a topic.</h3>}/>
  </div>
);

const Topic = ({match}) =>{
    console.log(match);

    return <div>
        <h3>{match.params.topicId}</h3>
    </div>
}

//export default BasicExample;

/************************代码拆分****************************/
import LoadAbout from 'bundle-loader?lazy!./router/About'
import loadDashboard from 'bundle-loader?lazy!./router/Dashborad'
import Bundle from './router/bundle'

const About = () => (
    <Bundle load={ LoadAbout }>
        { About =>
            {
                return About ? <About/> :null
            }
        }
    </Bundle>
);

const Dashboard = () => (
    <Bundle load={ loadDashboard }>
        {
            Dashboard => {
                return Dashboard ? <Dashboard/> : null;
            }
        }
    </Bundle>
);

class BundleTest extends React.Component{
    componentDidMount(){//挂载之后 懒加载组件
        LoadAbout( () => {});
        loadDashboard( () => {});
    }

    render(){
        return <div>
            <h1>Welcome!</h1>
            <Router>
                <div>
                    <Link to="/about">about</Link>
                    <Link to="/dashboard">dashboard</Link>
                    <hr/>
                    <Route path='/about' component={ About }/>
                    <Route path='/dashboard' component={ Dashboard }/>
                </div>
            </Router>
        </div>
    }
}

//export default BundleTest

/************************Scroll 恢复****************************/
import ScrollToTop from './router/scrollToTop'

class ScrollTest extends React.Component{
    render(){
        return <Router>
            <ScrollToTop>
                <div>
                    <Link to="/test1">test1</Link>&nbsp;&nbsp;&nbsp;
                    <Link to="/test2">test2</Link>
                    <hr/>
                    <Route path="/test1" render={
                        () => (
                            <h1 style={ { height:"1000px",background:"red"}}>test1</h1>
                        )
                    }/>
                    <Route path='/test2' render={
                        () => (
                            <h1 style={ {height:"1000px",background:"blue"} }>test2</h1>
                        )
                    }/>
                </div>
            </ScrollToTop>
        </Router>
    }
}

/************************API的测试****************************/
function TestA(){
    return <h1>TEST --> A</h1>
}
function TestB(){
    return <h1>TEST --> B</h1>
}
function TestContainer(){
    return <div>
        <Link to="/testA" replace>testA</Link>
        <br/>
        <Link to="/testB">testB</Link>
        <hr/>
        <Route path='/testA' component={ TestA }/>
        <Route path='/testB' component={ TestB }/>
    </div>
}

const getConfirmation = (message, callback) => {
    const allowTransition = window.confirm(message)
    callback(allowTransition)
}

function BrowserRouterTest (){
    return <Router
        basename="/a"
        forceRefresh={ !'pushState' in window.history }//支持h5为false
        getUserConfirmation = { getConfirmation }
        keyLength = { 12 }
        children={ <TestContainer/> }//只能是单一的子元素
    >
        {/*<TestContainer/>*/}
    </Router>
}

function HashRouterTest(){
    return <HashRouter
        basename= "/hash"
        getUserConfirmation={ getConfirmation }
        hashType= "hashbang"
        children={<TestContainer/>}
    >
        {/*<TestContainer/>*/}
    </HashRouter>
}

function NavLinkTest(){
    return <Router>
        <div>
            <Prompt message="哈哈" when={ false }/>
            <NavLink to="/navLink"
                activeClassName="test-active"
                     activeStyle={ {color:"red"} }
                     exact
                     strict={ true }
                     isActive={ (a,b) => {
                         console.log(a,b);
                        }
                     }
            >点我啊</NavLink>
            <hr/>
            <Route path='/navLink' component={TestContainer}/>
        </div>
    </Router>
}

//import {MemoryRouter} from 'react-router-dom'
function MemoryRouterTest (){
    return <MemoryRouter
        initialEntries={ ["/teatA","/test"] }
        initalIndex={ 1 }
        keyLength={12}
    >
        <TestContainer/>
    </MemoryRouter>
}

import {Redirect} from 'react-router-dom'
function RedirectTest (){
    let loggedIn = 1
    return <Router>
        <div>
            <Link to="/aa">点我啊</Link>
            <hr/>
            <Route
                exact
                path="/aa"
                render = {
                    ({match}) => {
                        console.log(match)
                        return loggedIn ? <Redirect to="/testA" push/> : null
                    }
                }
            />
        </div>

    </Router>
}
export default RedirectTest;


















