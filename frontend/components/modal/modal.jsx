import React from 'react';
import { connect } from 'react-redux';

import { hideModal } from '../../actions/modal_actions';
import CreatePostContainer from '../posts/create_post_container';
import EditPostContainer from '../posts/edit_post_container';
import SignupFormContainer from '../signup/signup_form_container';

function Modal({ modal, hideModal, postId }) {
    if (!modal) {
        return null;
    }

    let component;

    switch (modal) {
        case 'create':
            component = <CreatePostContainer />;
            break;
        case 'edit':
            component = <EditPostContainer postId={postId} />;
            break;
        case 'signup':
            component = <SignupFormContainer />;
            break;
        default:
            return null;
    }

    return (
        <div className="modal-background post-form" onClick={hideModal}>
            <div className="modal-child post-form" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mSTP = ({ ui }) => {
    return {
        modal: ui.modal
    };
};

const mDTP = dispatch => {
    return {
        hideModal: () => dispatch(hideModal())
    };
};

export default connect(mSTP, mDTP)(Modal);