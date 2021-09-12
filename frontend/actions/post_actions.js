import * as PostAPIUtil from '../util/post_util';

export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const REMOVE_POST = 'REMOVE_POST';

const receivePost = post => ({
    type: RECEIVE_POST,
    post
})

const receivePosts = posts => ({
    type: RECEIVE_POSTS,
    posts
})

const removePost = postId => ({
    type: REMOVE_POST,
    postId
})

export const fetchPosts = () => (
    dispatch => (
        PostAPIUtil.fetchPosts()
            .then(posts => dispatch(receivePosts(posts)))
    )
)

export const fetchPost = postId => (
    dispatch => (
        PostAPIUtil.fetchPost(postId)
            .then(post => dispatch(receivePost(post)))
    )
)

export const createPost = post => (
    dispatch => (
        PostAPIUtil.createPost(post)
            .then(post => (dispatch(receivePost(post))))
    )
)

export const updatePost = (post, id) => (
    dispatch => (
        PostAPIUtil.updatePost(post, id)
            .then(post => (dispatch(receivePost(post))))       
    )
)

export const deletePost = (postId) => (
    dispatch => (
        PostAPIUtil.deletePost(postId)
            .then(() => dispatch(removePost(postId)))
    )
)