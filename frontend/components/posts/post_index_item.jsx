import React from 'react'

const PostIndexItem = ({ post }) => {
    return (
        <div className="post-index-item-container">
            <div className="post-item-profile-container">
                profile pic here
            </div>
            <div className="comment-bar">
                comment bar
            </div>
            <div className="post-index-item" key={post.id}>
                {post.body}
            </div>
            <div>
                comment input
            </div>
        </div>
    )
}

export default PostIndexItem;
