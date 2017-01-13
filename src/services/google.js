import { replace } from 'react-router-redux'
import { toggleLoginButton } from '../actions/index'

export function login() {
    console.log('service google login()');
    
    return function (dispatch, getState) {

        // if (!isLogged) {
        //     backToHome(dispatch);
        // }
        // dispatch(toggleLoginButton(isLogged));
    }
}
