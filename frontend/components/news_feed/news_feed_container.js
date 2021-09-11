import { connect } from "react-redux"

import NewsFeed from './news_feed';
import { showModal } from '../../actions/modal_actions';

const mSTP = ({ session, entities: { users } }) => ({
    currentUser: users[session.id]
})

const mDTP = dispatch => ({
    showModal: () => dispatch(showModal('create'))
})

export default connect(mSTP, mDTP)(NewsFeed);