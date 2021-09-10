import {
    RECEIVE_SIGNUP_ERRORS,
    RECEIVE_CURRENT_USER,
    CLEAR_ERRORS
} from '../../actions/session_actions';

import { HIDE_MODAL } from '../../actions/modal_actions';

const signupErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_SIGNUP_ERRORS:
            return action.errors;
        case CLEAR_ERRORS:
            case HIDE_MODAL:
            return [];
        case RECEIVE_CURRENT_USER:
            return [];
        default:
            return state;
    }
}

export default signupErrorsReducer;