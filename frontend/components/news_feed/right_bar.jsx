import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchUsers } from "../../actions/user_actions";
import { allUsers, capitalize } from "../../util/format_util";

class RightBar extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const notFriends = () => {
      return this.props.users.map((user) => (
        <Link to={`/users/${user.id}`} key={user.id} className="friends-link">
          <div className="left-nav-profile-container">
            {user.profilePic ? (
              <img
                className="profile-icon left-nav"
                src={user.profilePic}
                alt="profile-icon"
              />
            ) : (
              <img
                className="profile-icon left-nav"
                src={defaultPic}
                alt="profile-icon"
              />
            )}
            {capitalize(user.fname) + " " + capitalize(user.lname)}
          </div>
        </Link>
      ));
    };

    return (
      <div className="right-bar-container">
        <h3>Sponsored</h3>
        <ul className="right-bar-list">
          <a
            href="https://www.worldwildlife.org/species/directory?sort=extinction_status&direction=desc"
            target="_blank"
            rel="noopener noreferrer"
            className="right-bar-list-item first"
          >
            <img src={wwf} alt="world wild life fund logo" />
            World Wildlife Fund
          </a>
          <a
            href="https://www.iucnredlist.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="right-bar-list-item"
          >
            <img src={iucn} alt="iucn red list logo" />
            IUCN Red List of Threatened Species
          </a>
        </ul>
        <h3 className="user-list-header">Explore the Wild</h3>
        <ul className="user-list">{notFriends()}</ul>
      </div>
    );
  }
}

const mSTP = ({ entities: { users }, session }) => ({
  users: allUsers(Object.values(users), users[session.id].friends, session.id),
});

const mDTP = (dispatch) => ({
  fetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mSTP, mDTP)(RightBar);
