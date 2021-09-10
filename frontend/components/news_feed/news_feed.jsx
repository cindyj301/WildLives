import React from 'react';

import LoginFormContainer from '../login/login_form_container';
import NavBarContainer from '../../components/navbar/navbar_container';
import PostFormContainer from '../posts/post_form_container';
import PostIndexContainer from '../posts/post_index_container';
import NavigationContainer from './navigation_container';
import Contacts from './contacts';

const NewsFeed = ({ currentUser }) => {
    const loggedIn = () => (
        <div>
            <NavBarContainer />
            <div className="news-feed-container">
                <NavigationContainer />
                <div className="news-feed-post-container">
                    <PostFormContainer />
                    <PostIndexContainer />
                </div>
                <Contacts /> {/*  change to container? */}
            </div>
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