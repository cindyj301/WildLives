import { connect } from "react-redux"
import { fetchPost, updatePost } from '../../actions/post_actions';

import EditPostModal from "./edit_post_modal";

const mSTP = ({ entities: { posts } }) => ({
    // post: posts[this.props.postId]
})

const mDTP = dispatch => ({
    // fetchPost: postId => dispatch(fetchPost(postId)),
    updatePost: post => dispatch(updatePost(post))
})

export default connect(mSTP, mDTP)(EditPostModal);
