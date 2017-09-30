/**
 * 过渡动画
 */

import React from 'react'
import {BrowserRouter as Router,Route,Link,Redirect} from 'react-router-dom'

//引入过渡
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const AnimationExample = () => (
    <Router>
        <Route render={
            ({location}) => (
                <div style={styles.fill}>
                    <Route exact path="/" render={
                        () => <Redirect to="/10/90/50"/>
                    }/>
                </div>
            )
        }/>

        <ul><NavLink/><NavLink/><NavLink/><NavLink/></ul>
    </Router>
);
