/**
 * 认证
 */

import React from 'react'
import { BrowserRouter as Router,Route,Link,Redirect,withRouter,Switch} from 'react-router-dom'


const AuthExample = () =>(
    <Router>
        <div>
            <AuthButton />
            <ul>
                <li>
                    <Link to='/public'>Public Page</Link>
                </li>
                <li>
                    <Link to="/protected">Protected Page</Link>
                </li>
            </ul>

            {/*不加switch每次路由改变都会匹配每一个Route*/}
            <Switch>
                <Route path="/public" component={ Public }/>
                <Route path="/login" component={ Login }/>
                <PrivateRoute path="/protected" component= {Protected}/>
            </Switch>
        </div>
    </Router>
);

const fakeAuth = {
    isAuthenticated:false,
    authenticate(callback){
        this.isAuthenticated = true;
        setTimeout(callback,100)
    },
    signOut(callback){
        this.isAuthenticated = false;
        setTimeout(callback,100)
    }
}

/**
 * 头部组件
 */
const AuthButton = withRouter( ({history}) => (
        fakeAuth.isAuthenticated ? (
            <p>
                Welcome! <button onClick={
                () => {
                    fakeAuth.signOut(
                        () => history.push('/')
                    );
                }
            }>Sign out</button>
            </p>
        ):(
            <p>You are not logged in!</p>
        )
));

/**
 * 私有路由
 */
const PrivateRoute = ({component:Component,...rest}) => {
    console.log("进来了");
    console.log(rest);
    return <Route
        {...rest}

        render = {
            props => {
                console.log(props);

                return fakeAuth.isAuthenticated ?
                            <Component {...props}/>:
                            <Redirect to={
                                {
                                    pathname:"/login",
                                    state:{from:props.location}
                                }
                        }/>
            }
        }
    />
};

const Public = () => <h3>Public</h3>;
const Protected = () => <h3>Protected</h3>;

/**
 * 登录
 */
class Login extends  React.Component{

    constructor(props){
        super(props);
        this.state = {
            redirectToReferrer:false
        }
    }

    login (){
        fakeAuth.authenticate( () => {
            this.setState({
                redirectToReferrer:true
            });
        })
    }

    render(){
        const { from } = this.props.location.state || {from :{pathname:"/"}};
        const { redirectToReferrer } = this.state;

        if(redirectToReferrer) return <Redirect to={ from }/>;

        return <div>
            <p>You must log in  to view this page at {from.pathname}</p>
            <button onClick={(e) => this.login(e) }>Log in</button>
        </div>
    }
}

export default AuthExample

















