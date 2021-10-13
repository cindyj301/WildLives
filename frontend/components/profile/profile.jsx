import React from "react";

import ProfileHeader from "./profile_header";
import ProfilePostIndex from "./profile_post_index";
import ProfileSideBar from "./profile_sidebar";
import NavBarContainer from "../navbar/navbar_container";

class Profile extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const { currentUser, hideModal, showModal, updateUser } = this.props;

    return (
      <div>
        <NavBarContainer />
        <ProfileHeader currentUser={currentUser} updateUser={updateUser} />
        <div className="profile-page-container">
          <div>
            <ProfileSideBar currentUser={currentUser} />
          </div>
          <ProfilePostIndex
            currentUser={currentUser}
            hideModal={hideModal}
            showModal={showModal}
          />
        </div>
      </div>
    );
  }
}

export default Profile;
