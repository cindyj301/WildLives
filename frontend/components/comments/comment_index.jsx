import React from "react";

import CommentIndexItem from "./comment_index_item";

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.comment;

    this.inputRef = React.createRef();
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleClick() {
    return this.inputRef.current.focus();
  }

  handleChange(e) {
    this.setState({ body: e.currentTarget.value });
  }

  handleKeyPress(e) {
    if (e.code === "Enter") {
      this.handleSubmit(e);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState(
      {
        comment_author_id: this.props.currentUser.id,
        post_id: this.props.postId,
      },
      () => {
        this.props.createComment(this.state).then(this.setState({ body: "" }));
      }
    );
  }

  render() {
    const { updateComment, deleteComment, comments } = this.props;

    const allComments = () => {
      return comments.map((comment) => (
        <CommentIndexItem
          key={comment.id}
          comment={comment}
          updateComment={updateComment}
          deleteComment={deleteComment}
          commenter={comment.commenter}
          commenterId={comment.commentAuthorId}
          currentUserId={this.props.currentUser.id}
        />
      ));
    };

    return (
      <div>
        <div className="comment-container" onClick={this.handleClick}>
          <div className="comment-background-area">
            <img src={comment} alt="comment" className="comment-icon" />
            <span className="comment-text">Comment</span>
          </div>
        </div>
        {allComments()}
        <div className="comment-input-container">
          {this.props.currentUser.profilePic ? (
            <img
              src={this.props.currentUser.profilePic}
              alt="profile-icon"
              className="profile-icon post-item comment-input-img"
            />
          ) : (
            <img
              className="profile-icon post-item comment-input-img"
              src={defaultPic}
              alt="profile-icon"
            />
          )}
          <input
            type="text"
            className="comment-input"
            placeholder="Write a comment..."
            ref={this.inputRef}
            value={this.state.body}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
          />
        </div>
      </div>
    );
  }
}

export default CommentIndex;
