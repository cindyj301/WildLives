import { connect } from "react-redux"

import { signup } from '../../actions/session_actions';
import { hideModal, showModal } from "../../actions/modal_actions";
import SignupModal from "../modal/signup_form_modal";

const mSTP = ({ errors, ui }) => ({
    errors: errors.session,
    modal: ui.modal
})

const mDTP = (dispatch) => ({
    hideModal: () => dispatch(hideModal()),
    showModal: () => dispatch(showModal()),
    signup: (user) => dispatch(signup(user))
})

export default connect(mSTP, mDTP)(SignupModal);