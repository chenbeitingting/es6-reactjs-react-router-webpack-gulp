/**
 * Created by chenbei on 16/2/1.
 */
import React from 'react'
import {render} from 'react-dom'

import {browserHistory, Router, Route, IndexRoute,Link} from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Login from 'loading/index';
import injectTapEventPlugin from 'react-tap-event-plugin'
window.injectTapEventPlugin = injectTapEventPlugin;
injectTapEventPlugin();

window.debug=false;


let history=[];

class App extends React.Component {
    constructor(){
        super();
    }
    /*
     * 返回时采用不一样的页面跳转动画
     * */
    handler(){
        let currentHash=this.props.location.pathname;
        let historyLen=history.length;
        if(historyLen > 1 &&history[historyLen-2]==currentHash){
            history.pop();
            return true;
        }else{
            history.push(currentHash);
            return false;
        }
    }

    render() {
        return (
            <div onclick={this.test}>
                <ReactCSSTransitionGroup
                    transitionName={this.handler()?"sliderOut":"slider"}
                    transitionEnterTimeout={700}
                    transitionLeaveTimeout={700}
                >
                    {React.cloneElement(this.props.children, {
                        key: this.props.location.pathname
                    })}
                </ReactCSSTransitionGroup>

            </div>
        )
    }
}

/*
 * 懒加载文件
 * */
const loadContainerAsync = bundle => (location, cb) => {
    bundle(component => {
        cb(null, component);
    });
};

render(
    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={Login}/>
            <Route path="index" getComponent={loadContainerAsync(require('bundle?lazy!./content/start/index.js'))} />
            <Route path="bind" getComponent={loadContainerAsync(require('bundle?lazy!./content/bind/index.js'))} />
            <Route path="expect" getComponent={loadContainerAsync(require('bundle?lazy!./content/expect/index.js'))} />
            <Route path="describe" getComponent={loadContainerAsync(require('bundle?lazy!./content/describe/index.js'))} />
            <Route path="help" getComponent={loadContainerAsync(require('bundle?lazy!./content/help/index.js'))} />
        </Route>
    </Router>,
    document.getElementById("main")
);


