import React from 'react'

import slothLogo from 'Images/sloth_logo.png'
import accountLogo from 'Images/account_dropdown_icon.png';
import homeLogo from 'Images/home_icon.png'

const NavBar = props => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        
      </ul>
    </nav>
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

