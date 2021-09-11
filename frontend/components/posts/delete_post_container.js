import { connect } from "react-redux"

import DeletePost from './delete_post';
import { deletePost, fetchPost } from "../../actions/post_actions";

const mSTP = ({ entities: { users, posts }, session }, ownProps) => ({
    currentUser: users[session.id],
    postAuthorId: posts[ownProps.postId].postAuthorId
})

const mDTP = dispatch => ({
    deletePost: postId => dispatch(deletePost(postId)),
    fetchPost: postId => dispatch(fetchPost(postId))
})

export default connect(mSTP, mDTP)(DeletePost);
