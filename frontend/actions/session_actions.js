import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

// regular action creators
const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
})

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors // this is an array
})

// thunk action creators (don't forget to dispatch any errors)
export const login = user => (
    dispatch => (
        SessionAPIUtil.login(user)
            .then(user => (
                dispatch(receiveCurrentUser(user))
            ), error => (
                dispatch(receiveErrors(error.responseJSON)) // key in promise response
            ))
    )
)

export const signup = user => (
    dispatch => (
        SessionAPIUtil.signup(user)
            .then(user => (
                dispatch(receiveCurrentUser(user))
            ), error => (
                dispatch(receiveErrors(error.responseJSON))
            ))
    )
)

export const logout = () => (
    dispatch => (
        SessionAPIUtil.logout()
            .then(user => dispatch(logoutCurrentUser()))
    )
)