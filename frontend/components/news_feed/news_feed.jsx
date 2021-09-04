import React from 'react';

const NewsFeed = ({ currentUser, logout }) => (
    <div>
        <span>{currentUser.fname}</span>
    </div>
);

export default NewsFeed;