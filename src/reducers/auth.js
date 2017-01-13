import {
    GOOGLE_LOGIN_REQUEST,
    GOOGLE_LOGIN_SUCCESS,
    GOOGLE_LOGIN_FAILURE,
    GOOGLE_LOGOUT_REQUEST,
    GOOGLE_LOGOUT_SUCCESS
} from '../actions/index'

const auth = (state = {
    isFetching: false,
    isAuthenticated: localStorage.getItem('id_token') ? true : false
}, action) => {
    switch (action.type) {
        case GOOGLE_LOGIN_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                isAuthenticated: false
            });

        case GOOGLE_LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: true
            });

        case GOOGLE_LOGIN_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: false,
                error: action.error
            });

        case GOOGLE_LOGOUT_REQUEST:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: true
            });

        case GOOGLE_LOGOUT_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: false
            });

        default:
            return state;
    }
};

export default auth