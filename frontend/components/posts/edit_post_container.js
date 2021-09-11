import { connect } from "react-redux"

import EditPostModal from "./edit_post_modal";
import { updatePost, fetchPost } from '../../actions/post_actions';
import { hideModal, showModal } from '../../actions/modal_actions';

const mSTP = ({ entities: { users, posts }, ui, session }, ownProps) => ({
    post: posts[ownProps.postId],
    modal: ui.modal,
    currentUser: users[session.id]
})

const mDTP = dispatch => ({
    updatePost: post => dispatch(updatePost(post)),
    fetchPost: postId => dispatch(fetchPost(postId)),
    hideModal: () => dispatch(hideModal()),
    showModal: () => dispatch(showModal())
})

export default connect(mSTP, mDTP)(EditPostModal);
