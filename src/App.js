import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
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
        let store = createStore(combinedReducer);

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
