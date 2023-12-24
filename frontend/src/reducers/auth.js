import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_FAIL,
    LOGOUT_SUCCESS
} from '../actions/types'

const initialState = {
    isAuthenticated: null,
    username: '',
    first_name: '',
    last_name: '',
    email: '',
}

export default function(state = initialState, action) {
    const { type, payload} = action

    switch(type){
        case REGISTER_SUCCESS:
            return {
                ...state,
                isAuthenticated: false
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                username: payload
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
                username: ''
            }
        case REGISTER_FAIL:
        case LOGIN_FAIL:
        case LOGOUT_FAIL:
            return {
                state
            }
        default:
            return {
                state
            }
    }
}