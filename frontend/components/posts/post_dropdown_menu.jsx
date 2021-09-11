import React from 'react'
import { connect } from 'react-redux';

import Modal from '../modal/modal';
import DeletePostContainer from './delete_post_container';
import { showModal } from '../../actions/modal_actions';

const PostDropdownMenu = ({ postId, showModal }) => {
    const editPostButton = () => (
        <div className="post-menu-item" onClick={() => showModal()}>
            <img width="20" height="20" src={editIcon} alt="edit-post" />
            <p className="modify-post-text">Edit Post</p>
        </div>
    )

    return (
        <div>
            <Modal postId={postId} />
            <div className="post-dropdown">
                {editPostButton()}
                <DeletePostContainer postId={postId} />
            </div>
        </div>
    )
}

const mDTP = dispatch => ({
    showModal: () => dispatch(showModal('edit'))
})

export default connect(null, mDTP)(PostDropdownMenu);
