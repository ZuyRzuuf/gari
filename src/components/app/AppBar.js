import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux';
import { connect } from 'react-redux'
import {browserHistory} from 'react-router'
import { routerMiddleware, push } from 'react-router-redux'
import MUIAppBar from 'material-ui/AppBar'
import MUIFlatButton from 'material-ui/FlatButton'
import { toggleLoginButton } from '../../actions/toggleLoginButton'
import reducers from '../../reducers/index'

const middleware = routerMiddleware(browserHistory);

const store = createStore(
    reducers,
    applyMiddleware(middleware)
);

class AppBar extends Component {
    constructor() {
        super();
        this._googleLogin = this.googleLogin.bind(this);
        this._backToHome = this.backToHome.bind(this);
    }

    googleLogin() {

        if (!this.props.isLogged) {
            this._backToHome();
        }
    };

    backToHome = () => {
        store.dispatch(push('/'))
    };

    render() {
        return (
            <MUIAppBar
                title="Google API React Interface"
                iconElementRight={ <MUIFlatButton label={ this.props.isLogged ? 'LogOut' : 'LogIn' } onClick={ this._googleLogin } /> }
                onRightIconButtonTouchTap={ this.props.onLoginButtonClick }
                showMenuIconButton={ false }
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLogged: state.loginButton.loggedIn
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLoginButtonClick: () => {
            dispatch(toggleLoginButton())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AppBar)
