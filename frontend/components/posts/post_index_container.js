import { connect } from 'react-redux';

import PostIndex from './post_index';
import { fetchPosts, createPost, updatePost, deletePost } from '../../actions/post_actions';
import { receiveCurrentUser } from '../../actions/session_actions';
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
    fetchPosts: () => dispatch(fetchPosts()),
    createPost: post => dispatch(createPost(post)),
    updatePost: post => dispatch(updatePost(post)),
    deletePost: postId => dispatch(deletePost(postId)),
    // receiveCurrentUser: user => dispatch(receiveCurrentUser(user))
})

export default connect(mSTP, mDTP)(PostIndex);