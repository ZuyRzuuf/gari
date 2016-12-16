import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import AppComponent from './AppComponent';
import Home from './Home';
import Calendar from './Calendar';
import YouTube from './YouTube';
import Gmail from './Gmail';
import NotFound from './NotFound';

class Routes extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={AppComponent}>
                    <IndexRoute component={Home} />
                    <Route path='calendar' component={Calendar} />
                    <Route path='youtube' component={YouTube} />
                    <Route path='gmail' component={Gmail} />
                    <Route path='*' component={NotFound} />
                </Route>
            </Router>
        )
    }
}

export default Routes;