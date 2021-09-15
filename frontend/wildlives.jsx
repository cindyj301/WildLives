import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

// for testing: remove later
import {
    fetchUsers,
    fetchUser
} from './actions/user_actions';

import {
    createFriendship,
    deleteFriendship
} from './actions/friend_actions';

document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    // for testing: remove later
    window.dispatch = store.dispatch;
    window.getState = store.getState;
    window.fetchUsers = fetchUsers
    window.fetchUser = fetchUser
    window.createFriendship = createFriendship;
    window.deleteFriendship = deleteFriendship;

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
})