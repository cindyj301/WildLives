import { connect } from "react-redux";
import { withRouter } from "react-router";

import PostForm from "./post_form";
import { hideModal, showModal } from "../../actions/modal_actions";
import { createPost } from "../../actions/post_actions";

const mSTP = ({ session, entities: { users } }, ownProps) => ({
  currentUser: users[session.id],
  formType: "Create Post",
  submitType: "Post",
  post: { body: "" },
  wallId: ownProps.match.params.userId, // either undefined on /feed or defined on users profile page
});

const mDTP = (dispatch) => ({
  hideModal: () => dispatch(hideModal()),
  showModal: () => dispatch(showModal("create")),
  processForm: (post) => dispatch(createPost(post)),
});

export default withRouter(connect(mSTP, mDTP)(PostForm));
