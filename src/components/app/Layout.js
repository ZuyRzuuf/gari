import React, { Component } from 'react'
import { connect } from 'react-redux'
import AppBar from './AppBar'
import getMainTabs from './MainTabs'
import '../../App.css'

class Layout extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="App ">
                <AppBar isLogged={ this.props.isLogged } />
                { this.props.isLogged ? getMainTabs() : null }
                { this.props.children }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLogged: state.loginButton.loggedIn
    }
};

// const mapDispatchToProps = (dispatch) => {
//     return dispatch
// };

export default connect(mapStateToProps)(Layout)
