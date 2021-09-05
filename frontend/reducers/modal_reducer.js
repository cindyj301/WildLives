import { SHOW_MODAL, HIDE_MODAL } from "../actions/modal_actions";

const modalReducer = (state = false, action) => {
    Object.freeze(state);

    switch(action.type) {
        case SHOW_MODAL:
            return true;
        case HIDE_MODAL:
            return false;
        default:
            return state;
    }
}

export default modalReducer;