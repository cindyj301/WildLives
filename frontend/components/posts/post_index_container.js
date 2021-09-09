import { connect } from 'react-redux';

import PostIndex from './post_index';
import { fetchPosts, createPost, updatePost, deletePost } from '../../actions/post_actions';
import { allPosts, postAuthor } from '../../util/format_util';

const mSTP = state => {
    console.log(state);
    return {
    posts: allPosts(state.entities),
    errors: state.errors.post,
    author: state.entities.posts.author
}}

const mDTP = dispatch => ({
    fetchPosts: () => dispatch(fetchPosts()),
    createPost: post => dispatch(createPost(post)),
    updatePost: post => dispatch(updatePost(post)),
    deletePost: postId => dispatch(deletePost(postId)),
})

export default connect(mSTP, mDTP)(PostIndex);