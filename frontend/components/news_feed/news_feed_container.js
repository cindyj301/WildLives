import { connect } from "react-redux"

import NewsFeed from './news_feed';

const mSTP = ({ session, entities: { users } })=> ({
    currentUser: users[session.id]
})

export default connect(mSTP)(NewsFeed);