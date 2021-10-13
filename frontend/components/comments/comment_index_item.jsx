import React from "react";
import { Link } from "react-router-dom";

import { capitalize, formatDate } from "../../util/format_util";

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      isEditable: false,
      body: this.props.comment.body,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleClick() {
    this.setState({ open: !this.state.open });
  }

  handleDelete() {
    this.props
      .deleteComment(this.props.comment.id)
      .then(this.setState({ open: !this.state.open }));
  }

  handleEdit() {
    this.setState({ isEditable: !this.isEditable, open: !this.state.open });
  }

  handleChange(e) {
    this.setState({ body: e.currentTarget.value });
  }

  handleKeyPress(e) {
    return e.code === "Enter" ? this.handleSubmit(e) : null;
  }

  handleSubmit() {
    this.setState({
      body: this.state.body,
      open: false,
      isEditable: false,
    });

    const formData = new FormData();
    formData.append("comment[body]", this.state.body);
    formData.append("comment[id]", this.props.comment.id);
    this.props.updateComment(formData);
  }

  render() {
    const modifyCommentIcon = () => {
      return this.props.commenterId === this.props.currentUserId ? (
        <img
          src={modifyPost}
          alt="modify-comment"
          className="modify-post-icon comment"
          onClick={this.handleClick}
        />
      ) : null;
    };

    const commentDropdownOptions = () => {
      return (
        <ul className="comment-dropdown">
          <li onClick={this.handleEdit} className="comment-dropdown-item">
            Edit
          </li>
          <li onClick={this.handleDelete} className="comment-dropdown-item">
            Delete
          </li>
        </ul>
      );
    };

    return (
      <div className="main-comment-body-container">
        <div className="comment-item-profile-container">
          {this.props.commenter.profilePic ? (
            <img
              src={this.props.commenter.profilePic}
              className="profile-icon comment-item"
              alt="profile-icon"
            />
          ) : (
            <img
              className="profile-icon comment-item"
              src={defaultPic}
              alt="profile-icon"
            />
          )}
        </div>
        <div className="sub-comment-body-container">
          <div className="comment-body">
            {this.state.isEditable ? (
              <input
                type="text"
                className="comment-input edit"
                value={this.state.body}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
              />
            ) : (
              <div>
                <span className="name comment">
                  <Link
                    to={`/users/${this.props.commenterId}`}
                    className="link"
                  >
                    {capitalize(this.props.commenter.fname) +
                      " " +
                      capitalize(this.props.commenter.lname)}
                  </Link>
                </span>
                <div className="comment-body-text">{this.state.body}</div>
              </div>
            )}
          </div>
          <span className="date comment">
            {formatDate(this.props.comment.createdAt)}
          </span>
        </div>
        <div className="modify-comment-container">
          {modifyCommentIcon()}
          {this.state.open && commentDropdownOptions()}
        </div>
      </div>
    );
  }
}

export default CommentIndexItem;
