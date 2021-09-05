import React from 'react';
import LoginFormContainer from '../session_form/login_form_container';

const NewsFeed = ({ currentUser, logout }) => {
    const loggedIn = () => (
        <div>
            <span>{currentUser.fname + ' ' + currentUser.lname}</span>
            <button onClick={logout}>Log Out</button>
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