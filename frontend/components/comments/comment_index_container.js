import { connect } from "react-redux"

import CommentIndex from "./comment_index";

import { createComment, updateComment, deleteComment } from '../../actions/comment_actions';

const mSTP = ({ entities: { users }, session }, ownProps) => {
    return {
        currentUser: users[session.id],
        comment: { body: '', comment_author_id: null, post_id: null },
        comments: ownProps.comments,
        postId: ownProps.postId
    }
}

const mDTP = dispatch => ({
    createComment: comment => dispatch(createComment(comment)),
    updateComment: comment => dispatch(updateComment(comment)),
    deleteComment: commentId => dispatch(deleteComment(commentId))
})

export default connect(mSTP, mDTP)(CommentIndex);