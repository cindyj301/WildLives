import React from 'react'

const PostIndexItem = ({ post }) => {
    return (
        <div className="post-index-item-container">
            <li className="post-index-item" key={post.id}>{post.body}</li>
        </div>
    )
}

export default PostIndexItem;
