import { TOGGLE_LOGIN_BUTTON } from '../actions/index';

const loginButton = (state = { loggedIn: false }, action) => {
    switch (action.type) {
        case TOGGLE_LOGIN_BUTTON: {
            return Object.assign({}, state, {
                loggedIn: !state.loggedIn
            });
        }

        default: {
            return state;
        }
    }
};

export default loginButton
