import { connect } from 'react-redux';

import PostFormModal from './post_form_modal';
import { hideModal, showModal } from '../../actions/modal_actions';
import { createPost } from '../../actions/post_actions';
import { clearErrors } from '../../actions/session_actions';

const mSTP = ({ errors, ui, session, entities: { users } }) => ({
    errors: errors.post,
    modal: ui.modal,
    currentUser: users[session.id]
})

const mDTP = dispatch => ({
    hideModal: () => dispatch(hideModal()),
    showModal: () => dispatch(showModal()),
    createPost: (post) => dispatch(createPost(post)),
    clearErrors: () => dispatch(clearErrors())
})

export default connect(mSTP, mDTP)(PostFormModal);