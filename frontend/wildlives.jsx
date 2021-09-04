import React from 'react';
import ReactDOM from 'react-dom';

// for testing remove later!!
import { signup, login, logout } from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    ReactDOM.render(<h1>WildLives</h1>, root);

    // for testing remove later!!
    window.login = login;
    window.logout = logout;
    window.signup = signup;
})