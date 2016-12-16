import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import AppComponent from './AppComponent';
import Calendar from './Calendar';
import YouTube from './YouTube';
import Gmail from './Gmail';

class Routes extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={AppComponent} />
                <Route path='/calendar' component={Calendar} />
                <Route path='/youtube' component={YouTube} />
                <Route path='/gmail' component={Gmail} />
            </Router>
        )
    }
}

export default Routes;