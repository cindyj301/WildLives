import { connect } from 'react-redux';

import PostIndex from './post_index';
import { fetchPosts, createPost, updatePost, deletePost } from '../../actions/post_actions';
import { allPosts } from '../../util/format_util';

const mSTP = ({ entities, errors }) => ({
    posts: allPosts(entities),
    errors: errors.post
})

const mDTP = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts()),
    createPost: post => dispatch(createPost(post)),
    updatePost: post => dispatch(updatePost(post)),
    deletePost: postId => dispatch(deletePost(postId))
})

export default connect(mSTP, mDTP)(PostIndex);