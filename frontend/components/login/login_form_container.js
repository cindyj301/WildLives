import { connect } from "react-redux"

import LoginForm from './login_form';
import { login } from '../../actions/session_actions';

const mSTP = ({ errors }) => ({
    errors: errors.login
})

const mDTP = (dispatch) => ({
    login: (user) => dispatch(login(user))
})

export default connect(mSTP, mDTP)(LoginForm);