import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Layout from './Layout';
import routes from '../../data/routes'

class Routes extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={Layout}>
                    <IndexRoute component={routes.home.component} />
                    <Route path={routes.calendar.path} component={routes.calendar.component} />
                    <Route path='youtube' component={routes.youtube.component} />
                    <Route path='gmail' component={routes.gmail.component} />
                    <Route path='*' component={routes.notFound.component} />
                </Route>
            </Router>
        )
    }
}

export default Routes;