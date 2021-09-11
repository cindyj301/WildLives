import React from 'react'

class DeletePost extends React.Component {
    render() {
        return (
            <div className="post-menu-item" onClick={() => this.props.deletePost(this.props.postId)}>
                <img width="20" height="20" src={deleteIcon} alt="delete-post" />
                <p className="modify-post-text">Move to Trash</p>
            </div>
        )
    }
}

export default DeletePost;
