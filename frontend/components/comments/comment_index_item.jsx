import React from 'react'

import { capitalize, formatDate } from '../../util/format_util';

class CommentIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open: false };

        this.handleClick = this.handleClick.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState({ open: !this.state.open })
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteComment(this.props.comment.id)
            .then(this.setState({ open: !this.state.open }));
    }

    handleEdit(e) {
        e.preventDefault();
        this.props.updateComment(this.props.comment)
            .then(this.setState({ open: !this.state.open }))
    }

    render() {
        const modifyCommentIcon = () => {
            return (this.props.commenterId === this.props.currentUserId) ? (
                <img
                    src={modifyPost}
                    alt="modify-comment"
                    className="modify-post-icon comment"
                    onClick={this.handleClick}
                />
            ) : null;
        }

        const commentDropdownOptions = () => {
            return (
                <ul className="comment-dropdown">
                    <li onClick={this.handleEdit} className="comment-dropdown-item">Edit</li>
                    <li onClick={this.handleDelete} className="comment-dropdown-item">Delete</li>
                </ul>
            )
        }

        return (
            <div className="main-comment-body-container">
                <div className="comment-item-profile-container">
                    <img
                        className="profile-icon comment-item"
                        src="https://scontent.fhou1-1.fna.fbcdn.net/v/t1.30497-1/cp0/p80x80/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&amp;ccb=1-5&amp;_nc_sid=7206a8&amp;_nc_ohc=T_q5miqWSkYAX_JRnzV&amp;_nc_ht=scontent.fhou1-1.fna&amp;oh=4ffecdaf87316f82d0d86f5fcbc40618&amp;oe=615AAEF6"
                        alt='profile-icon'
                    />
                </div>
                <div className="sub-comment-body-container">
                    <div className="comment-body">
                        <span className="name comment">{capitalize(this.props.commenter.fname) + " " + capitalize(this.props.commenter.lname)}</span>
                        <div className="comment-body-text">{this.props.comment.body}</div>
                    </div>
                    <span className="date comment">{formatDate(this.props.comment.createdAt)}</span>
                </div>
                <div className="modify-comment-container">
                    {modifyCommentIcon()}
                    { this.state.open && commentDropdownOptions() }
                </div>
            </div>
        )
    }
}

export default CommentIndexItem;
