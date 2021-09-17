import React from 'react';

// news feed
import NavBarContainer from '../../components/navbar/navbar_container';
import NavigationContainer from './navigation_container';
import Modal from '../modal/modal';
import PostIndexContainer from '../posts/post_index_container';
import RightBar from './right_bar';

// splash
import LoginFormContainer from '../login/login_form_container';

// util imports
import { capitalize } from '../../util/format_util';

const NewsFeed = ({ currentUser, showModal }) => {
    const createPostButton = () => {
        return (
            <div className="post-form-button-container">
                <div className='post-form-button'>
                    <li className="profile-container">
                        { currentUser.profilePic ? 
                            <img src={currentUser.profilePic} alt='profile-icon' className="profile-icon" />
                           : <img
                                className="profile-icon"
                                src="https://scontent.fhou1-1.fna.fbcdn.net/v/t1.30497-1/cp0/p80x80/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&amp;ccb=1-5&amp;_nc_sid=7206a8&amp;_nc_ohc=T_q5miqWSkYAX_JRnzV&amp;_nc_ht=scontent.fhou1-1.fna&amp;oh=4ffecdaf87316f82d0d86f5fcbc40618&amp;oe=615AAEF6"
                                alt='profile-icon'
                            />
                        }
                    </li>
                    <p onClick={() => showModal()}>
                        What's on your mind, {capitalize(currentUser.fname)}?
                    </p>
                </div>
            </div>
        )
    }

    const loggedIn = () => (
        <div>
            <NavBarContainer />
            <div className="news-feed-container">
                <NavigationContainer />
                <div className="news-feed-post-container">
                    <Modal />
                    {createPostButton()}
                    <PostIndexContainer />
                </div>
                <RightBar /> 
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