import React from 'react'
import { Link } from 'react-router-dom';

// component imports
import NavBarItem from './navbar_item';
import DropdownMenu from './dropdown_menu';

// util imports
import { capitalize } from '../../util/format_util';

const NavBar = ({ currentUser }) => {
  const accountIcon = () => (
    <img
        src={window.accountLogo}
        alt="account-dropdown-icon"
      />
  )
  
  const profileIcon = () => {
    return (
      <div className="profile-icon-container hover">
        <img
          className="profile-icon"
          src="https://scontent.fhou1-1.fna.fbcdn.net/v/t1.30497-1/cp0/p80x80/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&amp;ccb=1-5&amp;_nc_sid=7206a8&amp;_nc_ohc=T_q5miqWSkYAX_JRnzV&amp;_nc_ht=scontent.fhou1-1.fna&amp;oh=4ffecdaf87316f82d0d86f5fcbc40618&amp;oe=615AAEF6"
          alt='profile-icon'
          />
        <span>{capitalize(currentUser.fname)}</span>
      </div>

    )
  }

  return (
    <nav className="navbar">
      <div className="navbar-icons">
        <Link to="/feed">
          <img className="sloth-logo hover" src={window.slothLogo} alt="sloth" />
        </Link>
        <img src={window.homeLogo} alt="home-icon" className="home-icon hover" />
      </div>
      <ul className="navbar-nav">
        {profileIcon()}
        <NavBarItem icon={accountIcon()}>
          <DropdownMenu />
        </NavBarItem>
      </ul>
    </nav>
  )
}

export default NavBar;

