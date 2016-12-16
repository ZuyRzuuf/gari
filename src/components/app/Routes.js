import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Layout from './Layout';
import Home from './Home';
import Calendar from './Calendar';
import YouTube from './YouTube';
import Gmail from './Gmail';
import NotFound from './NotFound';

class Routes extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={Layout}>
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