import React, { Component } from 'react'
import { connect } from 'react-redux'
import MUIAppBar from 'material-ui/AppBar'
import MUIFlatButton from 'material-ui/FlatButton'
import { googleLogin } from '../../services/index'

class AppBar extends Component {
    render() {
        return (
            <MUIAppBar
                title="Google API React Interface"
                iconElementRight={ <MUIFlatButton label={ this.props.isLogged ? 'LogOut' : 'LogIn' } /> }
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

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onLoginButtonClick: () => {
            dispatch(googleLogin(ownProps.isLogged))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AppBar)
