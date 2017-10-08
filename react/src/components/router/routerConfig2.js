/**
 * 路由配置
 */
import React from 'react'
import {BrowserRouter as Router,Link} from 'react-router-dom'

import createRoutes from './router.config'

const RouteConfigExample = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/tacos">Tacos哈哈</Link></li>
                <li><Link to="/sandwiches">Sandwiches</Link></li>
            </ul>

            {
               createRoutes()
            }
        </div>
    </Router>
);
export default RouteConfigExample
