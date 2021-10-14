import { connect } from "react-redux";

import NewsFeed from "./news_feed";
import { showModal } from "../../actions/modal_actions";
import { fetchUsers } from "../../actions/user_actions";

const mSTP = ({ session, entities: { users } }) => ({
  currentUser: users[session.id],
});

const mDTP = (dispatch) => ({
  showModal: () => dispatch(showModal("create")),
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mSTP, mDTP)(NewsFeed);
