import { connect } from "react-redux"

import SessionForm from './login_form';
import { login } from '../../actions/session_actions';

const mSTP = ({ errors }) => ({
    errors: errors.session,
    formType: 'Log In'
})

const mDTP = (dispatch) => ({
    login: (user) => dispatch(login(user))
})

export default connect(mSTP, mDTP)(SessionForm);