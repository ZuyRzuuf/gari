import React, { Component } from 'react'
import { connect } from 'react-redux'
import MUIAppBar from 'material-ui/AppBar'
import GoogleButton from './GoogleLogin'
import auth from '../../config/auth'

class AppBar extends Component {
    render() {
        return (
            <MUIAppBar
                title="Google API React Interface"
                iconElementRight={ <GoogleButton clientId={ auth.google.clientId }
                                                 className="google-login"
                                                 scope={ auth.google.scope } /> }
                showMenuIconButton={ false }
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AppBar)
