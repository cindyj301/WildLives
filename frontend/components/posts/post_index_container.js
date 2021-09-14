import { connect } from 'react-redux';

import PostIndex from './post_index';
import { fetchPosts } from '../../actions/post_actions';
import { allPosts, allComments } from '../../util/format_util';
import { fetchComments } from '../../actions/comment_actions';

const mSTP = state => {
    return {
        posts: allPosts(state.entities),
        errors: state.errors.post,
        author: state.entities.posts.author,
        currentUser: state.entities.users[state.session.id],
        comments: allComments(state.entities)
    }
}

const mDTP = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts()),
    fetchComments: () => dispatch(fetchComments())
})

export default connect(mSTP, mDTP)(PostIndex);