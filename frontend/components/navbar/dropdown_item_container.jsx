import { connect } from "react-redux";
import React from 'react';

// import logoutLogo from 'Images/logout_icon.png';
import { logout } from '../../actions/session_actions';
import DropdownItem from "./dropdown_item";

const mSTP = () => ({
    leftIcon: <img src={window.logoutLogo} alt="logout-icon" />
})

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(DropdownItem);