export const fetchPosts = () => (
    $.ajax({
        url: '/api/posts'
    })
)

export const fetchPost = postId => (
    $.ajax({
        url: `/api/posts/${postId}`
    })
)

export const createPost = post => {
    return (
        $.ajax({
            url: 'api/posts',
            method: 'POST',
            data: post,
            processData: false, // these two keys are needed for requests with formData: let ajax know not to mess with post object format for rails BE (to prevent default jQuery behavior from trying to convert our FormData object and sending up the wrong header)
            contentType: false
        })
    )
}

export const updatePost = (post, id) => { 
    return (
        $.ajax({
            url: `/api/posts/${id}`,
            method: 'PATCH',
            data: post,
            processData: false,
            contentType: false
        })
    )
}

export const deletePost = postId => (
    $.ajax({
        url: `/api/posts/${postId}`,
        method: 'DELETE'
    })
)