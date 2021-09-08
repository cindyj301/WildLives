import React from 'react';
import { Switch } from 'react-router-dom';
// import classNames from 'classnames';
// import { connect } from 'react-redux';

import NewsFeedContainer from './news_feed/news_feed_container';
import LoginFormContainer from './login/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    // <div className="transparent-container">
    <div>
        {/* <div className={classNames({ "transparent": props.modal })}></div> */}
        <Switch>
            <ProtectedRoute path='/feed' component={NewsFeedContainer} />
            <AuthRoute exact path='/' component={LoginFormContainer} />
        </Switch>
    </div>
);

// const mSTP = ({ ui }) => ({
//     modal: ui.modal
// })

// export default connect(mSTP)(App);

export default App;