import { combineReducers } from 'redux'
import auth from './auth'
import loginButton from './loginButton'

const combinedReducer = combineReducers({
    auth,
    loginButton
});

export default combinedReducer
