export const  TOGGLE_LOGIN_BUTTON = 'TOGGLE_LOGIN_BUTTON'

export const toggleLoginButton = (state) => {
    return {
        type: TOGGLE_LOGIN_BUTTON,
        isLogged: state
    }
}
