import React, { Component } from 'react';
import AppBar from './AppBar';
import getMainTabs from './MainTabs';
import '../../App.css';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

const Nav = () => (
    <div>
        <Link to='/'>Home</Link>&nbsp;
        <Link to='/calendar'>Calendar</Link>
        <Link to='/youtube'>YouTube</Link>
        <Link to='/gmail'>Gmail</Link>
    </div>
);

class AppComponent extends Component {
    render() {
        return (
            <div className="App">
                <AppBar />
                {getMainTabs()}
                <Nav/>
                {this.props.children}
            </div>
        );
    }
}

export default AppComponent;
