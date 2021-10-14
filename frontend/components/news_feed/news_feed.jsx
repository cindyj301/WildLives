import React from "react";

// news feed
import NavBarContainer from "../../components/navbar/navbar_container";
import NavigationContainer from "./navigation_container";
import Modal from "../modal/modal";
import PostIndexContainer from "../posts/post_index_container";
import RightBar from "./right_bar";

// splash
import LoginFormContainer from "../login/login_form_container";

// util imports
import { capitalize } from "../../util/format_util";

const NewsFeed = ({ currentUser, showModal }) => {
  if (!currentUser) return null;

  const createPostButton = () => {
    return (
      <div className="post-form-button-container">
        <div className="post-form-button">
          <li className="profile-container">
            {currentUser.profilePic ? (
              <img
                src={currentUser.profilePic}
                alt="profile-icon"
                className="profile-icon"
              />
            ) : (
              <img
                className="profile-icon"
                src={defaultPic}
                alt="profile-icon"
              />
            )}
          </li>
          <p onClick={() => showModal()}>
            What's on your mind, {capitalize(currentUser.fname)}?
          </p>
        </div>
      </div>
    );
  };

  const loggedIn = () => (
    <div>
      <NavBarContainer />
      <div className="news-feed-container">
        <NavigationContainer />
        <div className="news-feed-post-container">
          <Modal />
          {createPostButton()}
          <PostIndexContainer />
        </div>
        <RightBar />
      </div>
    </div>
  );

  const loggedOut = () => (
    <div>
      <LoginFormContainer />
    </div>
  );

  return currentUser ? loggedIn() : loggedOut();
};

export default NewsFeed;
