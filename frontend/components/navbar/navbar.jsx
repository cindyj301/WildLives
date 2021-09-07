import React from 'react'

import slothLogo from 'Images/sloth_logo.png'
import homeLogo from 'Images/home_icon.png'
import accountLogo from 'Images/account_dropdown_icon.png';
import logoutLogo from 'Images/logout_icon.png';

const NavBar = ({ logout }) => {
  const accountIcon = () => (
    <img
        src={accountLogo}
        alt="account-dropdown-icon"
      />
  )

  return (
    <nav className="navbar">
      <div className="navbar-icons">
        <img className="sloth-logo" src={slothLogo} alt="sloth" />
        <img src={homeLogo} alt="home-icon" className="home-icon" />
      </div>
      <ul className="navbar-nav">
        <NavBarItem icon={accountIcon()}>
          <DropdownMenu logout={logout} />
        </NavBarItem>
      </ul>
    </nav>
  )
}

class NavBarItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ open: !this.state.open });
  }

  render() {
    const accountIcon = () => {
      return (
        <li className="navbar-item">
          <a
            href="#"
            className="icon-button"
            onClick={this.handleClick}>
            {this.props.icon}
          </a>
        </li>
      )
    }

    return (
      <>
        {accountIcon()}
        { this.state.open && this.props.children } {/* if open = true then show props.children, else render nothing */ }
      </>
    )
  }
}

const DropdownMenu = props => {
  const logoutIcon = () => (
    <img
      src={logoutLogo}
      alt="logout-icon"
    />
  )

  return (
      <div className="dropdown">
        <DropdownItem logout={props.logout} leftIcon={logoutIcon()}>
          <p className="logout-text">Log Out</p>
        </DropdownItem>
      </div>
  )
}

const DropdownItem = props => {
  return (
    <div onClick={props.logout} href="#" className="menu-item">
      <span className="icon-left">{props.leftIcon}</span>
      {props.children}
    </div>
  )
}

// const NavBar = ({ currentUser, logout }) => {
//   return (
//     <div>
//       <header className="header">
//         <nav className="header-nav">

//           <img className="sloth-logo"src={slothLogo} alt="sloth" />
//           <img src={homeLogo} alt="home-icon" className="home-icon" />
          
//           <ul className="header-list">
//             <li className="profile-container">
//               <img
//                   className="profile-icon"
//                   src="https://scontent.fhou1-1.fna.fbcdn.net/v/t1.30497-1/cp0/p80x80/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&amp;ccb=1-5&amp;_nc_sid=7206a8&amp;_nc_ohc=T_q5miqWSkYAX_JRnzV&amp;_nc_ht=scontent.fhou1-1.fna&amp;oh=4ffecdaf87316f82d0d86f5fcbc40618&amp;oe=615AAEF6"
//                   alt='profile-icon'
//               />
//               <span>{currentUser.fname.slice(0,1).toUpperCase() + currentUser.fname.slice(1).toLowerCase()}</span> {/* add profile image */}
//             </li>
//             <li>
//               <div className="account-icon-bg">
//                 <img
//                     className="account-icon"
//                     src={accountLogo}
//                     alt="account-dropdown-icon"
//                   />
//               </div>
//               <ul className="account-dropdown-links">
//                 <li>
//                   <button onClick={logout}>Log Out</button>
//                 </li>
//               </ul>
//             </li>
//           </ul>

//         </nav>
//       </header>
//     </div>
//   )
// }

export default NavBar;

