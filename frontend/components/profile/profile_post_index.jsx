import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";

// component imports
import Modal from "../modal/modal";
import ProfilePostIndexContainer from "./profile_post_index_container";

// util imports
import { capitalize } from "../../util/format_util";
import { fetchUser } from "../../actions/user_actions";

class ProfilePostIndex extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }

  render() {
    if (!this.props.user) return null;

    const createPostButton = () => {
      return (
        <div className="post-form-button-container">
          <div className="post-form-button">
            <li className="profile-container">
              {this.props.currentUser.profilePic ? (
                <img
                  src={this.props.currentUser.profilePic}
                  alt="profile-icon"
                  className="profile-icon"
                />
              ) : (
                <img
                  className="profile-icon"
                  src={defaultPic}
                  alt="profile-icon"
                />
              )}
            </li>
            {this.props.match.params.userId == this.props.currentUser.id ? (
              <p onClick={() => this.props.showModal()}>
                What's on your mind, {capitalize(this.props.currentUser.fname)}?
              </p>
            ) : (
              <p onClick={() => this.props.showModal()}>
                Write something to {capitalize(this.props.user.fname)}...
              </p>
            )}
          </div>
        </div>
      );
    };

    return (
      <div className="news-feed-post-container profile">
        <Modal />
        {createPostButton()}
        <ProfilePostIndexContainer />
      </div>
    );
  }
}

const mSTP = ({ entities: { users } }, ownProps) => {
  return {
    user: users[ownProps.match.params.userId],
  };
};

const mDTP = (dispatch) => ({
  fetchUser: (userId) => dispatch(fetchUser(userId)),
});

export default withRouter(connect(mSTP, mDTP)(ProfilePostIndex));
