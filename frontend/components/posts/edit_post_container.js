import { connect } from "react-redux"
import { updatePost, fetchPost } from '../../actions/post_actions';

import EditPostModal from "./edit_post_modal";

const mSTP = ({ entities: { users, posts }, session }, ownProps) => ({
    currentUser: users[session.id],
    postAuthorId: posts[ownProps.postId].postAuthorId
})

const mDTP = dispatch => ({
    updatePost: post => dispatch(updatePost(post)),
    fetchPost: postId => dispatch(fetchPost(postId))
})

export default connect(mSTP, mDTP)(EditPostModal);
