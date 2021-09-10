import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

// for testing remove later
import { fetchPosts, fetchPost, createPost, updatePost, deletePost } from './actions/post_actions';

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

    // for testing, remove later
    window.dispatch = store.dispatch;
    window.getState = store.getState;
    window.fetchPosts = fetchPosts;
    window.fetchPost = fetchPost;
    window.createPost = createPost;
    window.updatePost = updatePost;
    window.deletePost = deletePost;

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
})