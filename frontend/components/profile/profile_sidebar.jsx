import React, { Component } from 'react'

export default class ProfileSideBar extends Component {
    render() {
        return (
            <div className="profile-sidebar-container">
                sidebar
                <button onClick={this.handleClick}>Add Friend</button>
            </div>
        )
    }
}
