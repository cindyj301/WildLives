import { connect } from "react-redux"

import DeletePost from './delete_post';
import { deletePost } from "../../actions/post_actions";

const mDTP = dispatch => ({
    deletePost: postId => dispatch(deletePost(postId))
})

export default connect(null, mDTP)(DeletePost);
