import React, { Component } from 'react'

import { capitalize } from '../../util/format_util'

export default class ProfileHeader extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {

    }

    render() {
        const { currentUser } = this.props;

        return (
            <div className="profile-header-container">
                <div className="profile-pics-container">
                    {/* <img
                        src=""
                        alt=""
                        className="cover-photo"
                    /> */}
                    <div className="cover-photo">
                    </div>
                    <img
                        src="https://scontent.fhou1-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=3YCurt1IZskAX_WRAzK&_nc_ht=scontent.fhou1-1.fna&oh=a54fc5a653174e187629be9f492266f1&oe=616682F8"
                        className="profile-page-pic"
                        alt=""
                    />
                </div>
                <div className="profile-info-container">
                    <span>{capitalize(currentUser.fname) + " " + capitalize(currentUser.lname)}</span>
                </div>
                <div className="profile-page-nav-container">
                    <ul className="profile-page-nav">
                        <div className="profile-page-nav-tab-items-container">
                            <li className="profile-page-nav-tab-items">Posts</li>
                            <li className="profile-page-nav-tab-items">Friends</li> {/* add number of friends */}
                        </div>
                        <div className="add-friend-container">
                            <img className="add-friend-icon" src={addFriend} alt="Credit: Add Friend by FBianchi from the Noun Project" />
                            <span className="add-friend-text" onClick={this.handleClick}>Add Friend</span>
                        </div>
                    </ul>
                </div>
            </div>
        )
    }
}
