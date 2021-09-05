import { connect } from "react-redux"

import SessionForm from './login_form';
import { signup } from '../../actions/session_actions';
import SignupModal from "../modal/signup_form_modal";

const mSTP = ({ errors }) => ({
    errors: errors.session,
    formType: 'Sign Up'
})

const mDTP = (dispatch) => ({
    processForm: (user) => dispatch(signup(user))
})

export default connect(mSTP, mDTP)(SignupModal);