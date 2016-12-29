import React, { Component, PropTypes } from 'react'
import MUIFlatButton from 'material-ui/FlatButton'
import FontIcon from 'material-ui/FontIcon'

class GoogleButton extends Component {
    constructor(props) {
        super(props);
        this.signIn = this.signIn.bind(this);
        this.state = {
            disable: true,
        };
    }

    componentDidMount () {
        const { clientId, scope, cookiePolicy, autoLoad } = this.props;

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
                this.setState({
                    disable: false,
                });

                if (!window.gapi.auth2.getAuthInstance()) {
                    window.gapi.auth2.init(params);
                }

                if (autoLoad) {
                    this.signIn();
                }
            });
        });
    }

    signIn() {
        if (!this.state.disable) {
            const auth2 = window.gapi.auth2.getAuthInstance();
            const { onSuccess, onRequest, onFailure } = this.props;

            onRequest();

            auth2.signIn()
                .then(response => {
                    const basicProfile = response.getBasicProfile();
                    const authResponse = response.getAuthResponse();
                    response.googleId = basicProfile.getId();
                    response.tokenObj = authResponse;
                    response.tokenId = authResponse.id_token;
                    response.accessToken = authResponse.access_token;
                    response.profileObj = {
                        googleId: basicProfile.getId(),
                        imageUrl: basicProfile.getImageUrl(),
                        email: basicProfile.getEmail(),
                        name: basicProfile.getName(),
                        givenName: basicProfile.getGivenName(),
                        familyName: basicProfile.getFamilyName(),
                    };
                    onSuccess(response);
                }, error => {
                    onFailure(error);
                });
        }
    }
/*
    signOut() {
        var auth2 = window.gapi.auth2.getAuthInstance();
        console.log('auth2: ', auth2);
        auth2.signOut().then(function () {
            console.log('User signed out.');
            console.log('auth2: ', auth2);
        });
    }
*/
    render() {
        return(
            <MUIFlatButton className={ this.props.class }
                           label={ this.props.buttonText }
                           icon={<FontIcon className="fa fa-google" />}
                           onClick={ this.signIn.bind(this) } />
        );
    }
}

GoogleButton.propTypes = {
    autoLoad:       PropTypes.bool,
    buttonText:     PropTypes.string,
    className:      PropTypes.string,
    clientId:       PropTypes.string.isRequired,
    cookiePolicy:   PropTypes.string,
    onSuccess:      PropTypes.func.isRequired,
    onFailure:      PropTypes.func.isRequired,
    onRequest:      PropTypes.func,
    scope:          PropTypes.string.isRequired,
};

GoogleButton.defaultProps = {
    buttonText:     'Logowanie do konta Google',
    cookiePolicy:   'single_host_origin',
    onRequest:      () => {},
    redirectUri:    'postmessage',
    scope:          'profile email',
};

export default GoogleButton
