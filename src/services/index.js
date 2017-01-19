import { browserHistory } from 'react-router'
import * as actions from '../actions/index'

export function signIn() {
    return dispatch => {
        dispatch(actions.loginRequest());

        const auth2 = window.gapi.auth2.getAuthInstance();

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

                localStorage.setItem('id_token', authResponse.id_token);

                dispatch(actions.loginResponse(response));
                browserHistory.push('/calendar');
            }, error => {
                dispatch(actions.loginError(error));
            });
    }
}

export function signOut() {
    return dispatch => {
        dispatch(actions.logoutRequest());

        localStorage.removeItem('id_token');

        dispatch(actions.logoutResponse());
        browserHistory.push('/');
    }
}
