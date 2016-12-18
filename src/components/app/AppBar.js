import React, { Component } from 'react'
import { connect } from 'react-redux'
import MUIAppBar from 'material-ui/AppBar'
import MUIFlatButton from 'material-ui/FlatButton'
import { toggleLoginButton } from '../../actions/toggleLoginButton'

function googleLogIn(isLogged) {
    console.log('GoogleLogIn');
    console.log('this.props.isLogged: ', isLogged);
}

class AppBar extends Component {
    render() {
        return (
            <MUIAppBar
                title="Google API React Interface"
                iconElementRight={ <MUIFlatButton label={ this.props.isLogged ? 'LogOut' : 'LogIn' } onClick={ googleLogIn(this.props.isLogged) } /> }
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
