import React from 'react'

import NavigationItem from './navigation_item'

const Navigation = () => {
    const profileIcon = () => {
        return (
            <div className="">
                <img
                    className="profile-icon left-nav"
                    src="https://scontent.fhou1-1.fna.fbcdn.net/v/t1.30497-1/cp0/p80x80/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&amp;ccb=1-5&amp;_nc_sid=7206a8&amp;_nc_ohc=T_q5miqWSkYAX_JRnzV&amp;_nc_ht=scontent.fhou1-1.fna&amp;oh=4ffecdaf87316f82d0d86f5fcbc40618&amp;oe=615AAEF6"
                    alt='profile-icon'
                />
            </div>

        )
    }

    const friendsIcon = () => {
        return (
            <div>
                <img
                    className="friends-icon"
                    src={slothFriends}
                    alt="sloth-friends"
                />
            </div>
        )
    }

    return (
        <ul className="navigation-container">
            <div className="left-nav-item-container">
                <NavigationItem icon={profileIcon()} />
                <NavigationItem icon={friendsIcon()} />
            </div>
        </ul>
    )
}

export default Navigation
