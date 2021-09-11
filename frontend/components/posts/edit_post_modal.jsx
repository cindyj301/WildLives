import React from 'react'

class EditPostModal extends React.Component {
    componentDidMount() {
        this.props.fetchPost(this.props.postId);
    }
    
    render() {
        return (this.props.currentUser.id === this.props.postAuthorId) ?
            <div className="post-menu-item">
                <img width="20" height="20" src={editIcon} alt="edit-post" />
                <p className="modify-post-text">Edit Post</p>
            </div>
        : null;
    }
}

export default EditPostModal;