import React from 'react'

class DeletePost extends React.Component {
    // componentDidMount() {
    //     this.props.fetchPost(this.props.postId);
    // }

    render() {
        // return (this.props.currentUser.id === this.props.postAuthorId) ?
        return (
            <div className="post-menu-item" onClick={() => this.props.deletePost(this.props.postId)}>
                <img width="20" height="20" src={deleteIcon} alt="delete-post" />
                <p className="modify-post-text">Move to Trash</p>
            </div>
        )
        // : null;
    }
}

export default DeletePost;
