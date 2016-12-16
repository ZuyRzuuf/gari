import React, { Component } from 'react';
import AppBar from './AppBar';
import getMainTabs from './MainTabs';
import '../../App.css';

class AppComponent extends Component {
    render() {
        return (
            <div className="App">
                <AppBar />
                {getMainTabs()}
            </div>
        );
    }
}

export default AppComponent;
