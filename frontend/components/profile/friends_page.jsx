import React from "react";
import { connect } from "react-redux";

import ProfileHeader from "./profile_header";
import NavBarContainer from "../navbar/navbar_container";

import { fetchUsers, updateUser } from "../../actions/user_actions";

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
        <div>friends</div>
      </div>
    );
  }
}

const mSTP = (state, ownProps) => {
  return {
    user: state.entities.users[ownProps.match.params.userId],
    currentUser: state.entities.users[state.session.id],
    users: Object.values(state.entities.users),
  };
};

const mDTP = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
  updateUser: (user) => dispatch(updateUser(user)),
});

export default connect(mSTP, mDTP)(FriendsPage);
