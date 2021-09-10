import React from 'react'

import EditPostContainer from './edit_post_container';
import DeletePostContainer from './delete_post_container';

const PostDropdownMenu = ({ postId }) => {
    return (
        <div className="post-dropdown">
            <EditPostContainer postId={postId} />
            <DeletePostContainer postId={postId} />
        </div>
    )
}

export default PostDropdownMenu;
