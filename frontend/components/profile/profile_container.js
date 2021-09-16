import { connect } from "react-redux"

import Profile from './profile';
import { fetchUsers, updateUser } from '../../actions/user_actions';
import { fetchPosts, createPost, deletePost, updatePost } from "../../actions/post_actions";
import { createComment, deleteComment, updateComment } from "../../actions/comment_actions";
import { showModal, hideModal } from "../../actions/modal_actions";

const mSTP = ({ entities: { users }, session }, ownProps) => ({
    user: users[ownProps.match.params.userId],
    currentUser: users[session.id],
    users: Object.values(users)
})

const mDTP = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers()),
    fetchPosts: () => dispatch(fetchPosts()),
    createPost: post => dispatch(createPost(post)),
    updatePost: (post, id) => dispatch(updatePost(post, id)),
    deletePost: postId => dispatch(deletePost(postId)),
    createComment: comment => dispatch(createComment(comment)),
    updateComment: comment => dispatch(updateComment(comment)),
    deleteComment: commentId => dispatch(deleteComment(commentId)),
    updateUser: user => dispatch(updateUser(user)),
    hideModal: () => dispatch(hideModal()),
    showModal: () => dispatch(showModal('create'))
})

export default connect(mSTP, mDTP)(Profile);
