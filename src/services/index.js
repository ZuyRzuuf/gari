import { replace } from 'react-router-redux'
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
    }
}

export function googleLogin(isLogged) {
    console.log('service googleLogin isLogged: ', isLogged);
    
    return function (dispatch, getState) {

        if (!isLogged) {
            backToHome(dispatch);
        }
        dispatch(actions.toggleLoginButton(isLogged));
    }
}

export function backToHome(dispatch) {
    console.log('service backToHome');
    dispatch(replace('/'))
}
