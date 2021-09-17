import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import PostIndex from '../posts/post_index';
import { fetchPosts } from '../../actions/post_actions';
import { userPosts, allComments } from '../../util/format_util';
import { fetchComments } from '../../actions/comment_actions';

const mSTP = (state, ownProps) => {
    return {
        posts: userPosts(state.entities, state.entities.users[state.session.id]),
        errors: state.errors.post,
        author: state.entities.posts.author,
        currentUser: state.entities.users[state.session.id],
        comments: allComments(state.entities),
        user: state.entities.users[ownProps.match.params.userId]
    }
}

const mDTP = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts()),
    fetchComments: () => dispatch(fetchComments())
})

export default withRouter(connect(mSTP, mDTP)(PostIndex));