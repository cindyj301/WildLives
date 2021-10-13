import React from "react";

import ProfileHeader from "./profile_header";
import ProfilePostIndex from "./profile_post_index";
import ProfileSideBar from "./profile_sidebar";
import NavBarContainer from "../navbar/navbar_container";
import FriendsPage from "./friends_page";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showFriends: false,
    };

    this.toggleFriendsPage = this.toggleFriendsPage.bind(this);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  toggleFriendsPage() {
    this.setState({ showFriends: !this.state.showFriends });
  }

  render() {
    const { currentUser, hideModal, showModal, updateUser } = this.props;

    return (
      <div>
        <NavBarContainer />
        <ProfileHeader
          currentUser={currentUser}
          updateUser={updateUser}
          toggleFriendsPage={this.toggleFriendsPage}
        />
        {this.state.showFriends ? (
          <FriendsPage />
        ) : (
          <div className="profile-page-container">
            <div>
              <ProfileSideBar
                currentUser={currentUser}
                toggleFriendsPage={this.toggleFriendsPage}
              />
            </div>
            <ProfilePostIndex
              currentUser={currentUser}
              hideModal={hideModal}
              showModal={showModal}
            />
          </div>
        )}
      </div>
    );
  }
}

export default Profile;
