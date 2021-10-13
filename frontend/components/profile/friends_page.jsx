import React from "react";
import { connect } from "react-redux";

import ProfileHeader from "./profile_header";
import NavBarContainer from "../navbar/navbar_container";

import { fetchUsers, updateUser } from "../../actions/user_actions";
import { allUsers } from "../../util/format_util";

class FriendsPage extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { currentUser, updateUser } = this.props;

    return (
      <div>
        <NavBarContainer />
        <ProfileHeader currentUser={currentUser} updateUser={updateUser} />
        <div className="friends-page-container">
          <h3>Friends</h3>
          <div></div>
        </div>
      </div>
    );
  }
}

const mSTP = ({ entities: { users }, session }, ownProps) => ({
  user: users[ownProps.match.params.userId],
  currentUser: users[session.id],
  users: allUsers(Object.values(users), users[session.id].friends, session.id),
});

const mDTP = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
  updateUser: (user) => dispatch(updateUser(user)),
});

export default connect(mSTP, mDTP)(FriendsPage);
