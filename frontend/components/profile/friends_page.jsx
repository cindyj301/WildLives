import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import ProfileHeader from "./profile_header";
import NavBarContainer from "../navbar/navbar_container";

import { fetchUsers, updateUser } from "../../actions/user_actions";
import { capitalize } from "../../util/format_util";

class FriendsPage extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { currentUser, updateUser, friends } = this.props;

    const allFriends = () =>
      friends.map((friend) => (
        <Link
          to={`/users/${friend.id}`}
          key={friend.id}
          className="friends-link"
        >
          <div className="friends-list-item friends-page">
            {friend.profilePic ? (
              <img
                src={friend.profilePic}
                alt="profile-pic"
                className="friends-profile-icon"
              />
            ) : (
              <img
                src={defaultPic}
                alt="profile-pic"
                className="friends-profile-icon"
              />
            )}
            <span>
              {capitalize(friend.fname) + " " + capitalize(friend.lname)}
            </span>
          </div>
        </Link>
      ));

    return (
      <div>
        <NavBarContainer />
        <ProfileHeader currentUser={currentUser} updateUser={updateUser} />
        <div className="center">
          <div className="friends-page-container">
            <h3>Friends</h3>
            <div className="friends-page-grid-container">
              <div className="friends-page-grid">{allFriends()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mSTP = ({ entities: { users }, session }, ownProps) => ({
  user: users[ownProps.match.params.userId],
  currentUser: users[session.id],
  friends: users[ownProps.match.params.userId].friends,
});

const mDTP = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
  updateUser: (user) => dispatch(updateUser(user)),
});

export default connect(mSTP, mDTP)(FriendsPage);
