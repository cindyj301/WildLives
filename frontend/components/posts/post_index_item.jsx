import React from 'react'

const PostIndexItem = ({ post }) => {
    return (
        // <div className="reverse-posts">
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
        // </div>
    )
}

export default PostIndexItem;
