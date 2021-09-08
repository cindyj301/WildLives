import { connect } from "react-redux"

import { hideModal } from "../../actions/modal_actions";
import Modal from './modal';

const mSTP = ({ ui }) => ({
    modal: ui.modal
})

const mDTP = dispatch => ({
    hideModal: () => dispatch(hideModal())
})

export default connect(mSTP, mDTP)(Modal);