import { connect } from 'react-redux';

import PostIndex from './post_index';
import { fetchPosts } from '../../actions/post_actions';
import { allPosts } from '../../util/format_util';

const mSTP = state => {
    return {
        posts: allPosts(state.entities),
        errors: state.errors.post,
        author: state.entities.posts.author,
        currentUser: state.entities.users[state.session.id]
    }
}

const mDTP = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts())
})

export default connect(mSTP, mDTP)(PostIndex);