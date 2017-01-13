import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import MUIFlatButton from 'material-ui/FlatButton'
import FontIcon from 'material-ui/FontIcon'
import * as service from '../../services/index'

class GoogleLogin extends Component {
    componentDidMount () {
        const { clientId, scope, cookiePolicy } = this.props;

        ((d, s, id, onload) => {
            let script = d.createElement(s);
            script.id = id;
            script.src = '//apis.google.com/js/client:platform.js';
            d.head.appendChild(script);
            script.onload = onload
        })(document, 'script', 'google-platform', () => {
            const params = {
                client_id: clientId,
                cookie_policy: cookiePolicy,
                scope,
            };

            window.gapi.load('auth2', () => {
                if (!window.gapi.auth2.getAuthInstance()) {
                    window.gapi.auth2.init(params);
                }
            });
        });
    }

    render() {
        return(
            <div>
            { !this.props.isAuthenticated ?
                <MUIFlatButton className={ this.props.class }
                               label={ this.props.buttonText }
                               icon={<FontIcon className="fa fa-google"/>}
                               onClick={ this.props.onLoginButtonClick }
                />
                :
                <MUIFlatButton className={ this.props.class }
                               label="Wyloguj z aplikacji"
                               icon={<FontIcon className="fa fa-google"/>}
                               onClick={ this.props.onLogoutButtonClick }
                />
            }
            </div>
        );
    }
}

GoogleLogin.propTypes = {
    buttonText:     PropTypes.string,
    className:      PropTypes.string,
    clientId:       PropTypes.string.isRequired,
    cookiePolicy:   PropTypes.string,
    scope:          PropTypes.string.isRequired,
};

GoogleLogin.defaultProps = {
    buttonText:     'Logowanie do konta Google',
    cookiePolicy:   'single_host_origin',
    redirectUri:    'postmessage',
    scope:          'profile email',
};

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        isFetching: state.auth.isFetching
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onLoginButtonClick: () => {
            dispatch(service.signIn())
        },
        onLogoutButtonClick: () => {
            dispatch(service.signOut())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GoogleLogin)
