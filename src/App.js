import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import combinedReducer from './reducers/index'
import Routes from './components/app/Routes'
import './App.css'

class App extends Component {
    constructor() {
        super();
        injectTapEventPlugin();
    }

    render() {
        let store = createStore(
            combinedReducer,
            composeWithDevTools(
                applyMiddleware (
                    thunkMiddleware // lets dispatch() functions
                )
            )
        );

        return (
            <Provider store={store}>
                <MuiThemeProvider >
                    <Routes />
                </MuiThemeProvider>
            </Provider>
        )
    }
}

export default App
