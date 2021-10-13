import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

import PetsIcon from "@material-ui/icons/Pets";

import { capitalize } from "../../util/format_util";

class ProfileSideBar extends React.Component {
  render() {
    const { user, friends, users } = this.props;

    if (!user) return null;
    if (!friends) return null;
    if (!users) return null;

    const statusIcon = () => {
      if (user.status === "Critically Endangered") {
        return (
          <img
            src={critical}
            alt="Credit: User:Kontos, Public domain, via Wikimedia Commons"
            className="status-icon"
          />
        );
      } else if (user.status === "Endangered") {
        return (
          <img
            src={endangered}
            alt="Credit: User:Kontos, Public domain, via Wikimedia Commons"
            className="status-icon"
          />
        );
      } else {
        return (
          <img
            src={vulnerable}
            alt="Credit: User:Kontos, Public domain, via Wikimedia Commons"
            className="status-icon"
          />
        );
      }
    };

    const allFriends = () => {
      return friends
        .map((friend) => (
          <Link
            to={`/users/${friend.id}`}
            key={friend.id}
            className="friends-link"
          >
            <div className="friends-list-item">
              {users[friend.id] ? (
                users[friend.id].profilePic ? (
                  <img
                    src={users[friend.id].profilePic}
                    alt="profile-pic"
                    className="friends-profile-icon"
                  />
                ) : (
                  <img
                    src={defaultPic}
                    alt="profile-pic"
                    className="friends-profile-icon"
                  />
                )
              ) : null}
              {capitalize(friend.fname) + " " + capitalize(friend.lname)}
            </div>
          </Link>
        ))
        .slice(0, 9);
    };

    return (
      <div className="profile-sidebar-container">
        <div className="intro">
          <h3>Intro</h3>
          <p>
            <PetsIcon />
            {user.animal}
          </p>
          <p>
            {statusIcon()}
            {user.status}
          </p>
        </div>
        <div className="friends">
          <div className="friends-header">
            <div className="friends-subheader">
              <Link to={`/users/${user.id}/friends`} className="friends-link">
                <h3>Friends</h3>
              </Link>
              {friends.length === 1 ? (
                <span className="friend-count">{friends.length} Friend</span>
              ) : (
                <span className="friend-count">{friends.length} Friends</span>
              )}
            </div>
            <Link to={`/users/${user.id}/friends`} className="friends-link">
              <p>See All Friends</p>
            </Link>
          </div>

          <div className="friends-list-grid">{allFriends()}</div>
        </div>
      </div>
    );
  }
}

const mSTP = ({ entities: { users } }, ownProps) => ({
  friends: users[ownProps.match.params.userId]?.friends,
  user: users[ownProps.match.params.userId],
  users: users,
});

export default withRouter(connect(mSTP)(ProfileSideBar));
