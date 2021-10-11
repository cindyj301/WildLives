import React from "react";
import { Link } from "react-router-dom";

// component imports
import NavBarItem from "./navbar_item";
import DropdownMenu from "./dropdown_menu";

// util imports
import { capitalize } from "../../util/format_util";

const NavBar = ({ currentUser }) => {
  const accountIcon = () => (
    <img src={accountLogo} alt="account-dropdown-icon" />
  );

  const profileIcon = () => {
    return (
      <div className="profile-icon-container hover">
        {currentUser.profilePic ? (
          <img
            src={currentUser.profilePic}
            alt="profile-icon"
            className="profile-icon"
          />
        ) : (
          <img className="profile-icon" src={defaultPic} alt="profile-icon" />
        )}
        <span>{capitalize(currentUser.fname)}</span>
      </div>
    );
  };

  return (
    <nav className="navbar">
      <div className="navbar-icons">
        <Link to="/feed">
          <img className="sloth-logo hover" src={slothLogo} alt="sloth" />
        </Link>
        <div className="home-icon-container">
          <Link to="/feed">
            <img src={homeLogo} alt="home-icon" className="home-icon hover" />
          </Link>
        </div>
      </div>
      <ul className="navbar-nav">
        <Link to={`/users/${currentUser.id}`} className="profile-link">
          {profileIcon()}
        </Link>
        <NavBarItem icon={accountIcon()}>
          <DropdownMenu />
        </NavBarItem>
      </ul>
    </nav>
  );
};

export default NavBar;
