export const fetchComments = () => (
    $.ajax({
        url: '/api/comments'
    })
)

export const fetchComment = commentId => (
    $.ajax({
        url: `/api/comments/${commentId}`
    })
)

export const createComment = comment => {
    return (
        $.ajax({
            url: '/api/comments',
            method: 'POST',
            data: { comment }
        })
    )
}

export const updateComment = comment => (
    $.ajax({
        url: `/api/comments/${comment.id}`,
        method: 'PATCH',
        data: { comment }
    })
)

export const deleteComment = commentId => (
    $.ajax({
        url: `/api/comments/${commentId}`,
        method: 'DELETE'
    })
)