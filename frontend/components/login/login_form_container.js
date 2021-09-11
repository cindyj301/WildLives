import { connect } from "react-redux"

import LoginForm from './login_form';
import { clearErrors, login } from '../../actions/session_actions';
import { showModal } from "../../actions/modal_actions";

const mSTP = ({ errors }) => ({
    errors: errors.login
})

const mDTP = (dispatch) => ({
    login: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
    showModal: () => dispatch(showModal('signup'))
})

export default connect(mSTP, mDTP)(LoginForm);