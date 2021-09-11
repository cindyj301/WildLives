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

export const createPost = post => (
    $.ajax({
        url: 'api/posts',
        method: 'POST',
        data: post,
        processData: false,
        contentType: false
    })
)

export const updatePost = post => {
    const postId = post.get('post[id]'); // getting the key value of the formData object from the front end in handleSubmit of PostForm
    
    return (
        $.ajax({
            url: `/api/posts/${postId}`,
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