import React, { Component } from 'react'
import { connect } from 'react-redux'
import MUIAppBar from 'material-ui/AppBar'
// import MUIFlatButton from 'material-ui/FlatButton'
import { googleLogin } from '../../services/index'
import GoogleButton from './GoogleButton'
import auth from '../../config/auth'

const responseGoogle = (googleUser) => {
    console.log(googleUser)
};

const requestingGoogle = () => {
    console.log('start authentication')
};

const authFailed = (error) => {
    console.log(error)
};

class AppBar extends Component {
    render() {
        return (
            <MUIAppBar
                title="Google API React Interface"
                //iconElementRight={ <MUIFlatButton label={ this.props.isLogged ? 'LogOut' : 'LogIn' } /> }
                iconElementRight={ <GoogleButton clientId={ auth.google.clientId }
                                                 class="google-login"
                                                 scope={ auth.google.scope }
                                                 responseHandler={ responseGoogle }
                                                 buttonText=" Logowanie do konta Google"
                                                 onSuccess={ responseGoogle }
                                                 onRequest={ requestingGoogle }
                                                 onFailure={ authFailed } /> }
                //onRightIconButtonTouchTap={ this.props.onLoginButtonClick }
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

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onLoginButtonClick: () => {
            dispatch(googleLogin(ownProps.isLogged))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AppBar)
