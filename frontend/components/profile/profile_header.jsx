import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import { capitalize, isFriend } from "../../util/format_util";

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
      : "https://scontent.fhou1-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=3YCurt1IZskAX_WRAzK&_nc_ht=scontent.fhou1-1.fna&oh=a54fc5a653174e187629be9f492266f1&oe=616682F8";
  }

  render() {
    const { user, currentUser, isFriend, friends } = this.props;

    if (!user) return null;

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
            </div>
          </div>
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
          <div className="profile-pic-wrapper">
            <img
              src={this.profilePicPreview()}
              className="profile-page-pic"
              alt="profile-pic"
            />
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
        </div>
        <div className="profile-info-container">
          <span>{capitalize(user.fname) + " " + capitalize(user.lname)}</span>
        </div>
        <div className="profile-page-nav-container">
          <ul className="profile-page-nav">
            <div className="profile-page-nav-tab-items-container">
              <li className="profile-page-nav-tab-items">Posts</li>
              <li className="profile-page-nav-tab-items">
                Friends <span>{friends.length}</span>
              </li>
            </div>
            {user.id === currentUser.id ? null : isFriend ? (
              <div className="add-friend-container">
                <span className="add-friend-text">Remove Friend</span>
              </div>
            ) : (
              <div className="add-friend-container">
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
  };
};

export default withRouter(connect(mSTP)(ProfileHeader));
