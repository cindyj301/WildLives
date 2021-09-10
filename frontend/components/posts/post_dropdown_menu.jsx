import React from 'react'

import EditPostContainer from './edit_post_container';
import DeletePostContainer from './delete_post_container';

const PostDropdownMenu = () => {
    return (
        <div>
            <EditPostContainer />
            <DeletePostContainer />
        </div>
    )
}

export default PostDropdownMenu;
