import React, { Component } from 'react'
import { createStore, combineReducers } from 'redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import reducers from '../../reducers/index'
import Layout from './Layout'
import routes from '../../data/routes'

const store = createStore(
    combineReducers({
        ...reducers,
        routing: routerReducer
    })
);

const history = syncHistoryWithStore(browserHistory, store);

class Routes extends Component {
    render() {
        return (
            <Router history={history}>
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

export default Routes
