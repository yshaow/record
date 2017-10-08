/**
 * 路由配置文件
 */
import React from 'react'
import {Route} from 'react-router-dom'

/**
 * 导入相关组件
 */
import {Link} from 'react-router-dom'
const Sandwiches = () => <h2>Sandwiches</h2>;
const Tacos = ({routes}) => (
    <div>
        <h2>Tacos</h2>
        <ul>
            <li><Link to="/tacos/bus">Bus</Link></li>
            <li><Link to="/tacos/cart">Cart</Link></li>
        </ul>
        {
            createRoutes(routes)
        }
    </div>
);
const Bus = () => <h3>Bus</h3>;
const Cart = () => <h3>Cart</h3>;

/**
 * 配置路由
 */
const routes = [
    {
        path: '/sandwiches',
        component: Sandwiches
    },
    {
        path: '/tacos',
        component: Tacos,
        routes: [
            {
                path: '/tacos/bus',
                component: Bus
            },
            {
                path: '/tacos/cart',
                component: Cart
            }
        ]
    }
];

/**
 * 自定义route
 */
const DefineRoute = (route) => {
    if(route){
        return <Route path={route.path} render={
            (props) => {
                return <route.component {...props} routes={route.routes}/>;
            }
        }/>
    }
};

/**
 * 根据routes生成route视图
 */
const createRoutes = (rts = routes) => {
    if(!(rts instanceof Array) || rts.length < 0) return console.error("createRoutes参数：非null的数组！");

    return rts.map((route, i) => {
        return <DefineRoute key={i} {...route}/>;
    });
};

export {
    routes,
    DefineRoute,
    createRoutes as default
};


