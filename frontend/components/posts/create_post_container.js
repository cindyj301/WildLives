import { connect } from 'react-redux';

import PostForm from './post_form';
import { hideModal, showModal } from '../../actions/modal_actions';
import { createPost } from '../../actions/post_actions';

const mSTP = ({ session, entities: { users } }) => ({
    currentUser: users[session.id],
    formType: 'Create Post',
    submitType: 'Post',
    post: { body: '' }
})

const mDTP = dispatch => ({
    hideModal: () => dispatch(hideModal()),
    showModal: () => dispatch(showModal('create')),
    processForm: post => dispatch(createPost(post)),
})

export default connect(mSTP, mDTP)(PostForm);