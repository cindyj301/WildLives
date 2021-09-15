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
                    <img
                        src=""
                        alt=""
                        className="cover-photo" />
                    <img
                        src=""
                        className="profile-page-pic"
                        alt=""
                    />
                </div>
                <div className="profile-info-container">
                    <span>{capitalize(currentUser.fname) + " " + capitalize(currentUser.lname)}</span>
                </div>
                <div className="profile-page-nav">
                    profile nav
                </div>
            </div>
        )
    }
}
