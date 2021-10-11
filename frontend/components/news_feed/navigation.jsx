import React from "react";
import { Link } from "react-router-dom";

import NavigationItem from "./navigation_item";
import { capitalize } from "../../util/format_util";

const Navigation = ({ currentUser }) => {
  const profileIcon = () => {
    return (
      <div className="left-nav-profile-container">
        {currentUser.profilePic ? (
          <img
            className="profile-icon left-nav"
            src={currentUser.profilePic}
            alt="profile-icon"
          />
        ) : (
          <img
            className="profile-icon left-nav"
            src={defaultPic}
            alt="profile-icon"
          />
        )}
        <span>
          {capitalize(currentUser.fname) + " " + capitalize(currentUser.lname)}
        </span>
      </div>
    );
  };

  const friendsIcon = () => {
    return (
      <div className="left-nav-friends-container">
        <img className="friends-icon" src={slothFriends} alt="sloth-friends" />
        <span>Friends</span>
      </div>
    );
  };

  const gitHubIcon = () => {
    return (
      <div className="personal-icon">
        <img src={github} alt="github" />
        <span>Github</span>
      </div>
    );
  };

  const linkedInIcon = () => {
    return (
      <div className="personal-icon">
        <img src={linkedin} alt="linkedin" />
        <span>LinkedIn</span>
      </div>
    );
  };

  return (
    <ul className="navigation-container">
      <div className="left-nav-item-container">
        <Link to={`users/${currentUser.id}`} className="profile-link">
          <NavigationItem icon={profileIcon()} />
        </Link>
        <NavigationItem icon={friendsIcon()} />
      </div>
      <div className="left-nav-item-container personal">
        <h3>About Me</h3>
        <a
          className="personal-links"
          href="https://github.com/cindyj301/WildLives"
        >
          <NavigationItem icon={gitHubIcon()} />
        </a>
        <a
          className="personal-links"
          href="https://www.linkedin.com/in/jiang-cindy/"
        >
          <NavigationItem icon={linkedInIcon()} />
        </a>
        <div className="tech-description">
          <span>Ruby on Rails</span>
          <span> · </span>
          <span>HTML</span>
          <span> · </span>
          <span>CSS</span>
          <span> · </span>
          <span>JavaScript</span>
          <span> · </span>
          <span>React</span>
          <span> · </span>
          <span>Redux</span>
          <span> · </span>
          <span>Cindy Jiang 2021</span>
        </div>
      </div>
    </ul>
  );
};

export default Navigation;
