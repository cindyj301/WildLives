import React, { Component } from 'react'

import PetsIcon from '@material-ui/icons/Pets';

export default class ProfileSideBar extends Component {
    render() {
        const { currentUser } = this.props;

        const statusIcon = () => {
            if (currentUser.status === 'Critically Endangered') {
                return <img
                            src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Status_iucn_CR_icon.svg"
                            alt="Credit: User:Kontos, Public domain, via Wikimedia Commons"
                            className="status-icon"
                        />
            } else if (currentUser.status === 'Endangered') {
                return <img
                            src="https://commons.wikimedia.org/wiki/File:Status_iucn_EN_icon.svg"
                            alt="Credit: User:Kontos, Public domain, via Wikimedia Commons"
                            className="status-icon"
                        />
            } else {
                return <img
                            src="https://commons.wikimedia.org/wiki/File:Status_iucn_VU_icon.svg"
                            alt="Credit: User:Kontos, Public domain, via Wikimedia Commons"
                            className="status-icon"
                        />
            }
        }

        return (
            <div className="profile-sidebar-container">
                <div className="intro">
                    <h3>Intro</h3>
                    <p>
                        <PetsIcon />
                        {currentUser.animal}
                    </p>
                    <p>
                        {statusIcon()}
                        {currentUser.status}
                    </p>
                </div>
                <div className="friends">
                    <div className="friends-header">
                        <h3>Friends</h3>
                        <p>See All Friends</p>
                        {/* add number of friends */}
                    </div>

                    {/* <div className="friends-grid">
                        <div>

                        </div>
                        <div>

                        </div>
                        <div>

                        </div>
                        <div>

                        </div>
                        <div>

                        </div>
                        <div>
                            
                        </div>
                    </div> */}
                </div>
            </div>
        )
    }
}
