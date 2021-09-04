import { connect } from "react-redux"

import NewsFeed from './news_feed';
import { logout } from '../../actions/session_actions';

const mSTP = ({ session, entities: { users } })=> ({
    currentUser: users[session.id]
})

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(NewsFeed);