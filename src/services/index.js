import { replace } from 'react-router-redux'
import { toggleLoginButton } from '../actions/toggleLoginButton'

export function googleLogin(isLogged) {
    console.log('service googleLogin isLogged: ', isLogged);
    
    return function (dispatch, getState) {

        if (!isLogged) {
            backToHome(dispatch);
        }
        dispatch(toggleLoginButton(isLogged));
    }
}

export function backToHome(dispatch) {
    console.log('service backToHome');
    dispatch(replace('/'))
}
