import React, { Component } from 'react'
import { connect } from 'react-redux'
import AppBar from './AppBar'
import getMainTabs from './MainTabs'
import '../../App.css'

class Layout extends Component {
    render() {
        return (
            <div className="App">
                <AppBar />
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
