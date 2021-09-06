import {
    RECEIVE_SIGNUP_ERRORS,
    RECEIVE_CURRENT_USER
} from '../actions/session_actions';

const signupErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_SIGNUP_ERRORS:
            return action.errors; // action.errors is an array 
        case RECEIVE_CURRENT_USER:
            return [];
        default:
            return state;
    }
}

export default signupErrorsReducer;