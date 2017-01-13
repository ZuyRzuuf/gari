import React, { Component } from 'react'
import { connect } from 'react-redux'
import AppBar from './AppBar'
import getMainTabs from './MainTabs'
import '../../App.css'

class Layout extends Component {
    render() {
        const { isLogged } = this.props;

        return (
            <div className="App ">
                <AppBar isLogged={ isLogged } />
                { isLogged ? getMainTabs() : null }
                { this.props.children }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLogged: state.auth.isAuthenticated
    }
};

// const mapDispatchToProps = (dispatch) => {
//     return dispatch
// };

export default connect(mapStateToProps)(Layout)
