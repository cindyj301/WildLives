import React from "react";

// component imports
import PostModifyIcon from "./post_modify_icon";
import CommentIndexContainer from "../comments/comment_index_container";

// util imports
import { capitalize } from "../../util/format_util";

const PostIndexItem = ({
  body,
  fname,
  lname,
  date,
  postId,
  postAuthorId,
  currentUserId,
  post,
  comments,
}) => {
  const modifyIcon = () => (
    <img src={modifyPost} alt="modify-post" className="modify-post-icon" />
  );

  const modifyPostOptions = () => {
    return postAuthorId === currentUserId ? (
      <PostModifyIcon icon={modifyIcon()} postId={postId} />
    ) : null;
  };

  const postPhoto = () => {
    return post.photoUrl ? (
      <div className="post-photo">
        <img src={post.photoUrl} alt="post-photo" />
      </div>
    ) : null;
  };

  return (
    <div className="post-index-item-container">
      <div className="post-item-header-container">
        <div className="post-item-profile-container">
          {post.profilePic ? (
            <img
              src={post.profilePic}
              alt="profile-icon"
              className="profile-icon post-item"
            />
          ) : (
            <img
              className="profile-icon post-item"
              src={defaultPic}
              alt="profile-icon"
            />
          )}
          <div className="name-date-container">
            <span className="name">
              {capitalize(fname) + " " + capitalize(lname)}
            </span>
            <span className="date">{date}</span>
          </div>
        </div>
        {modifyPostOptions()}
      </div>
      <div className="post-body">{body}</div>
      {postPhoto()}
      <CommentIndexContainer comments={comments} postId={postId} />
    </div>
  );
};

export default PostIndexItem;
