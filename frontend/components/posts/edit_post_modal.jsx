import React from 'react'

class EditPostModal extends React.Component {
    render() {
        return (
            <div className="post-menu-item">
                <img width="20" height="20" src={editIcon} alt="edit-post" />
                <p className="modify-post-text">Edit Post</p>
            </div>
        )
    }
}

export default EditPostModal;