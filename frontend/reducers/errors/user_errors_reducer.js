import { CLEAR_ERRORS } from '../../actions/session_actions';
import { RECEIVE_USER_ERRORS } from '../../actions/user_actions';

const userErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_USER_ERRORS:
            return action.errors;
        case CLEAR_ERRORS:
            return [];
        default:
            return state;
    }
}

export default userErrorsReducer;