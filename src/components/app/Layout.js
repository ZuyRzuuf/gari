import React, { Component } from 'react';
import AppBar from './AppBar';
import getMainTabs from './MainTabs';
import '../../App.css';

class Layout extends Component {
    render() {
        return (
            <div className="App">
                <AppBar />
                {getMainTabs()}
                {this.props.children}
            </div>
        );
    }
}

export default Layout;
