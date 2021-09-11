import { connect } from "react-redux"

import { clearErrors, signup } from '../../actions/session_actions';
import { hideModal, showModal } from "../../actions/modal_actions";
import SignupForm from "./signup_form";

const mSTP = ({ errors, ui }) => ({
    errors: errors.signup,
    modal: ui.modal
})

const mDTP = dispatch => ({
    hideModal: () => dispatch(hideModal()),
    showModal: () => dispatch(showModal('signup')),
    signup: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
})

export default connect(mSTP, mDTP)(SignupForm);