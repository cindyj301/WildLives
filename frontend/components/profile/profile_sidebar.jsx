import React from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import PetsIcon from '@material-ui/icons/Pets';

import { capitalize } from '../../util/format_util';

class ProfileSideBar extends React.Component {
    render() {
        const { user } = this.props;

        const statusIcon = () => {
            if (user.status === 'Critically Endangered') {
                return <img
                            src={critical}
                            alt="Credit: User:Kontos, Public domain, via Wikimedia Commons"
                            className="status-icon"
                        />
            } else if (user.status === 'Endangered') {
                return <img
                            src={endangered}
                            alt="Credit: User:Kontos, Public domain, via Wikimedia Commons"
                            className="status-icon"
                        />
            } else {
                return <img
                            src={vulnerable}
                            alt="Credit: User:Kontos, Public domain, via Wikimedia Commons"
                            className="status-icon"
                        />
            }
        }

        const allFriends = () => {
            return this.props.friends.map(friend => 
                <Link to={`/users/${friend.id}`} key={friend.id} className="friends-link">
                    <div className="friends-list-item">
                        {(friend.profilePic) ?
                            <img
                                src={friend.profilePic}
                                alt="profile-pic"
                                className="friends-profile-icon"
                            />
                            : <img
                                src="https://scontent.fhou1-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=3YCurt1IZskAX_WRAzK&_nc_ht=scontent.fhou1-1.fna&oh=a54fc5a653174e187629be9f492266f1&oe=616682F8"
                                alt="profile-pic"
                                className="friends-profile-icon"
                            />}
                        {capitalize(friend.fname) + " " + capitalize(friend.lname)}
                    </div>
                </Link>
            ).slice(0, 9)
        }

        return (
            <div className="profile-sidebar-container">
                <div className="intro">
                    <h3>Intro</h3>
                    <p>
                        <PetsIcon />
                        {user.animal}
                    </p>
                    <p>
                        {statusIcon()}
                        {user.status}
                    </p>
                </div>
                <div className="friends">
                    <div className="friends-header">
                        <h3>Friends</h3>
                        <p>See All Friends</p>
                        {/* add number of friends */}
                    </div>

                    <div className="friends-list-grid">
                        {allFriends()}
                    </div>
                </div>
            </div>
        )
    }
}

const mSTP = ({ entities: { users } }, ownProps) => ({
    friends: Object.values(users).filter(user => user.id != ownProps.match.params.userId),
    user: users[ownProps.match.params.userId]
})

export default withRouter(connect(mSTP)(ProfileSideBar));