import * as CommentAPIUtil from '../util/comment_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
})

const receiveComments = comments => ({
    type: RECEIVE_COMMENTS,
    comments
})

const removeComment = commentId => ({
    type: REMOVE_COMMENT,
    commentId
})

export const fetchComments = () => (
    dispatch => (
        CommentAPIUtil.fetchComments()
            .then(comments => dispatch(receiveComments(comments)))
    )
)

export const fetchComment = commentId => (
    dispatch => (
        CommentAPIUtil.fetchComment(commentId)
            .then(comment => dispatch(receiveComment(comment)))
    )
)

export const createComment = comment => {
    return dispatch => (
        CommentAPIUtil.createComment(comment)
            .then(comment => (dispatch(receiveComment(comment))))
    )
}

export const updateComment = (comment) => (
    dispatch => (
        CommentAPIUtil.updateComment(comment)
            .then(comment => (dispatch(receiveComment(comment))))       
    )
)

export const deleteComment = (commentId) => (
    dispatch => (
        CommentAPIUtil.deleteComment(commentId)
            .then(() => dispatch(removeComment(commentId)))
    )
)