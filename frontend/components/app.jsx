import React from 'react';
import { Switch } from 'react-router-dom';

import NewsFeedContainer from './news_feed/news_feed_container';
import LoginFormContainer from './login/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        <Switch>
            <ProtectedRoute path='/feed' component={NewsFeedContainer} />
            <AuthRoute exact path='/' component={LoginFormContainer} />
        </Switch>
    </div>
);

export default App;