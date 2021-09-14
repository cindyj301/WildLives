import {
    RECEIVE_LOGIN_ERRORS,
    RECEIVE_CURRENT_USER,
    CLEAR_ERRORS
} from '../../actions/session_actions';

import { SHOW_MODAL } from '../../actions/modal_actions';

const loginErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_LOGIN_ERRORS:
            return action.errors;
        case CLEAR_ERRORS:
            case SHOW_MODAL:
            return [];
        case RECEIVE_CURRENT_USER:
            return [];
        default:
            return state;
    }
}

export default loginErrorsReducer;