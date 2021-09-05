import { connect } from "react-redux"

import { signup } from '../../actions/session_actions';
import SignupModal from "../modal/signup_form_modal";

const mSTP = ({ errors }) => ({
    errors: errors.session
})

const mDTP = (dispatch) => ({
    signup: (user) => dispatch(signup(user))
})

export default connect(mSTP, mDTP)(SignupModal);