import React from 'react';
import { Route, Switch } from 'react-router-dom';

import NewsFeedContainer from './news_feed/news_feed_container';
import LoginFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        <h1>WildLives</h1>
        <Switch>
            <ProtectedRoute path='/feed' component={NewsFeedContainer} />
            <AuthRoute exact path='/' component={LoginFormContainer} />
        </Switch>
    </div>
);

export default App;