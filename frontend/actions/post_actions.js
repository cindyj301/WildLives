import * as PostAPIUtil from '../util/post_util';

export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const REMOVE_POST = 'REMOVE_POST';
export const RECEIVE_POST_ERRORS = 'RECEIVE_POST_ERRORS';

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

const receivePostErrors = errors => ({
    type: RECEIVE_POST_ERRORS,
    errors
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
            .then(post => (
                dispatch(receivePost(post))
            ), error => (
                dispatch(receivePostErrors(error.responseJSON))
            ))
    )
)

export const updatePost = post => (
    dispatch => (
        PostAPIUtil.updatePost(post)
            .then(post => (
                dispatch(updatePost(post))
            ), error => (
                dispatch(receivePostErrors(error.responseJSON))
            ))
                
    )
)

export const deletePost = postId => (
    dispatch => (
        PostAPIUtil.deletePost()
            .then(() => dispatch(removePost(postId)))
    )
)