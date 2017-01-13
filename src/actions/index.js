export const GOOGLE_LOGIN_REQUEST = 'GOOGLE_LOGIN_REQUEST'
export const GOOGLE_LOGIN_SUCCESS = 'GOOGLE_LOGIN_SUCCESS'
export const GOOGLE_LOGIN_FAILURE = 'GOOGLE_LOGIN_FAILURE'
export const GOOGLE_LOGOUT_REQUEST = 'GOOGLE_LOGOUT_REQUEST'
export const GOOGLE_LOGOUT_SUCCESS = 'GOOGLE_LOGOUT_SUCCESS'
export const TOGGLE_LOGIN_BUTTON = 'TOGGLE_LOGIN_BUTTON'

export const loginRequest = () => {
    return {
        type: GOOGLE_LOGIN_REQUEST,
        isFetching: true,
        isAuthenticated: false
    }
}

export const loginResponse = (googleUser) => {
    return {
        type: GOOGLE_LOGIN_SUCCESS,
        isFetching: false,
        isAuthenticated: true,
        googleUser
    }
}

export const loginError = (error) => {
    return {
        type: GOOGLE_LOGIN_FAILURE,
        isFetching: false,
        isAuthenticated: false,
        error
    }
}

export const logoutRequest = () => {
    return {
        type: GOOGLE_LOGOUT_REQUEST,
        isFetching: true,
        isAuthenticated: true
    }
}

export const logoutResponse = () => {
    return {
        type: GOOGLE_LOGOUT_SUCCESS,
        isFetching: false,
        isAuthenticated: false
    }
}

export const toggleLoginButton = (state) => {
    return {
        type: TOGGLE_LOGIN_BUTTON,
        isLogged: state
    }
}
