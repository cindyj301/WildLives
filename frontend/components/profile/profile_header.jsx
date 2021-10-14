import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

import { capitalize, isFriend } from "../../util/format_util";
import {
  createFriendship,
  deleteFriendship,
} from "../../actions/friend_actions";
import { fetchUser } from "../../actions/user_actions";

class ProfileHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coverPhoto: null,
      profilePic: null,
      coverPhotoUrl: null,
      profPhotoUrl: null,
      open: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.profilePicPreview = this.profilePicPreview.bind(this);
    this.removeFriend = this.removeFriend.bind(this);
    this.addFriend = this.addFriend.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.friends) {
      if (prevProps.friends.length !== this.props.friends.length) {
        this.props.fetchUser(this.props.user.id);
      }
    }
  }

  toggleModal() {
    this.setState({ open: !this.state.open });
  }

  handleFile(field) {
    return (e) => {
      const file = e.currentTarget.files[0];
      const fileReader = new FileReader();

      let photoUrl;

      if (field === "coverPhoto") {
        photoUrl = "coverPhotoUrl";
      } else if (field === "profilePic") {
        photoUrl = "profPhotoUrl";
      }

      fileReader.onloadend = () => {
        this.setState({ [field]: file, [photoUrl]: fileReader.result });
      };

      if (file) {
        fileReader.readAsDataURL(file);
        this.toggleModal();
      }
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append("user[id]", this.props.user.id);

    if (this.state.coverPhotoUrl) {
      formData.append("user[cover_photo]", this.state.coverPhoto);
    }

    if (this.state.profPhotoUrl) {
      formData.append("user[profile_pic]", this.state.profilePic);
    }

    this.props.updateUser(formData).then(this.toggleModal);
  }

  handleCancel() {
    this.setState({ coverPhotoUrl: null });
    this.toggleModal();
  }

  profilePicPreview() {
    return this.state.profPhotoUrl
      ? this.state.profPhotoUrl
      : defaultProfPagePic;
  }

  removeFriend(friendIds) {
    const { deleteFriendship, currentUser, user } = this.props;

    const friendship = friendIds.filter(
      (friendship) =>
        friendship.requesterId === currentUser.id &&
        friendship.requesteeId === user.id
    );

    deleteFriendship(parseInt(friendship[0].id)).then(
      this.props.fetchUser(this.props.user.id)
    );
  }

  addFriend() {
    const formData = new FormData();
    formData.append("friend[requester_id]", this.props.currentUser.id);
    formData.append("friend[requestee_id]", this.props.user.id);

    this.props
      .createFriendship(formData)
      .then(this.props.fetchUser(this.props.user.id));
  }

  render() {
    const { user, currentUser, isFriend, friends, friendIds } = this.props;

    if (!user) return null;
    if (!friendIds) return null;

    const coverPhotoPreview = this.state.coverPhotoUrl ? (
      <img src={this.state.coverPhotoUrl} className="cover-photo-img" />
    ) : (
      <div className="cover-photo"></div>
    );

    const coverPhotoModal = this.state.open ? (
      <div className="cover-photo modal-background">
        <div
          className="cover-photo modal-child"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="cover-photo-modal-button cancel"
            onClick={this.handleCancel}
          >
            <span>Cancel</span>
          </button>
          <button
            className="cover-photo-modal-button"
            onClick={this.handleSubmit}
          >
            <span>Save Changes</span>
          </button>
        </div>
      </div>
    ) : null;

    return (
      <div className="profile-header-container">
        {coverPhotoModal}
        <div className="profile-pics-container">
          <div className="cover-photo-container">
            <div className="cover-photo-upload-container">
              {coverPhotoPreview}
              {user.coverPhoto ? (
                <img src={user.coverPhoto} alt="cover-photo" />
              ) : (
                <div className="cover-photo"></div>
              )}
            </div>
            {currentUser.id !== user.id ? null : (
              <div className="cover-photo-upload-label-container">
                <label
                  className="cover-photo-upload-label"
                  htmlFor="cover-photo-input"
                >
                  <img
                    className="cover-photo-upload-icon"
                    src={camera}
                    alt="add-cover-photo"
                  />
                  <span>Add Cover Photo</span>
                </label>
                <input
                  type="file"
                  id="cover-photo-input"
                  onChange={this.handleFile("coverPhoto")}
                />
              </div>
            )}
          </div>
          {currentUser.id !== user.id ? null : (
            <div className="profile-pic-upload-container">
              <label
                className="profile-pic-upload-label"
                htmlFor="profile-pic-input"
              >
                <img
                  className="profile-pic-upload-icon"
                  src={camera}
                  alt="profile-pic"
                />
              </label>
              <input
                type="file"
                id="profile-pic-input"
                onChange={this.handleFile("profilePic")}
              />
            </div>
          )}
          {user.profilePic ? (
            <img
              src={user.profilePic}
              alt="profile-pic"
              className="profile-page-pic"
            />
          ) : (
            <img
              src={this.profilePicPreview()}
              className="profile-page-pic"
              alt="profile-pic"
            />
          )}
        </div>
        <div className="profile-info-container">
          <span>{capitalize(user.fname) + " " + capitalize(user.lname)}</span>
        </div>
        <div className="profile-page-nav-container">
          <ul className="profile-page-nav">
            <div className="profile-page-nav-tab-items-container">
              <Link to={`/users/${user.id}`} className="profile-link">
                <li className="profile-page-nav-tab-items">Posts</li>
              </Link>
              <Link to={`/users/${user.id}/friends`} className="profile-link">
                <li className="profile-page-nav-tab-items">
                  Friends <span>{friends.length}</span>
                </li>
              </Link>
            </div>
            {user.id === currentUser.id ? null : isFriend ? (
              <div
                className="add-friend-container"
                onClick={() => this.removeFriend(friendIds)}
              >
                <span className="add-friend-text">Remove Friend</span>
              </div>
            ) : (
              <div className="add-friend-container" onClick={this.addFriend}>
                <img
                  className="add-friend-icon"
                  src={addFriend}
                  alt="Credit: Add Friend by FBianchi from the Noun Project"
                />
                <span className="add-friend-text">Add Friend</span>
              </div>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

const mSTP = ({ entities: { users } }, ownProps) => {
  return {
    user: users[ownProps.match.params.userId],
    friends: users[ownProps.match.params.userId]?.friends,
    isFriend: isFriend(
      users[ownProps.match.params.userId]?.friends,
      ownProps.currentUser
    ),
    friendIds: ownProps.currentUser.friendIds,
  };
};

const mDTP = (dispatch) => ({
  createFriendship: (friendship) => dispatch(createFriendship(friendship)),
  deleteFriendship: (friendshipId) => dispatch(deleteFriendship(friendshipId)),
  fetchUser: (userId) => dispatch(fetchUser(userId)),
});

export default withRouter(connect(mSTP, mDTP)(ProfileHeader));
