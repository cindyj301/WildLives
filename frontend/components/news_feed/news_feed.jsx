import React from 'react';

import LoginFormContainer from '../login/login_form_container';
import NavBarContainer from '../../components/navbar/navbar_container';
import PostFormContainer from '../posts/post_form_container';

const NewsFeed = ({ currentUser }) => {
    const loggedIn = () => (
        <div>
            <NavBarContainer />
            <PostFormContainer />
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