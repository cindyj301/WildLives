import React from 'react';

const NewsFeed = ({ currentUser, logout }) => {
    const loggedIn = () => (
        <div>
            <span>{currentUser.fname + ' ' + currentUser.lname}</span>
            <button onClick={logout}>Log Out</button>
        </div>
    );

    const loggedOut = () => (
        <div>
            <h2>Splash Page</h2>
        </div>
    );

    return currentUser ? loggedIn() : loggedOut();
};

export default NewsFeed;