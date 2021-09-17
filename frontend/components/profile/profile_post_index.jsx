import React from 'react'
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

// component imports
import Modal from '../modal/modal';
import PostIndexContainer from './profile_post_index_container';

// util imports
import { capitalize } from '../../util/format_util';
import { fetchUser } from '../../actions/user_actions';

class ProfilePostIndex extends React.Component {
    componentDidMount() {   
        this.props.fetchUser(this.props.match.params.userId)
    }   

    render() {
        if (!this.props.user) return null;

        const createPostButton = () => {
            return (
                <div className="post-form-button-container">
                    <div className='post-form-button'>
                        <li className="profile-container">
                            { this.props.currentUser.profilePic ? 
                                <img src={this.props.currentUser.profilePic} alt='profile-icon' className="profile-icon" />
                                : <img
                                    className="profile-icon"
                                    src="https://scontent.fhou1-1.fna.fbcdn.net/v/t1.30497-1/cp0/p80x80/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&amp;ccb=1-5&amp;_nc_sid=7206a8&amp;_nc_ohc=T_q5miqWSkYAX_JRnzV&amp;_nc_ht=scontent.fhou1-1.fna&amp;oh=4ffecdaf87316f82d0d86f5fcbc40618&amp;oe=615AAEF6"
                                    alt='profile-icon'
                                />
                            }
                        </li>
                        {/* <p onClick={() => this.props.showModal()}>
                            What's on your mind, {capitalize(this.props.currentUser.fname)}?
                        </p> */}
                        { this.props.match.params.userId == this.props.currentUser.id ? 
                            <p onClick={() => this.props.showModal()}>
                                What's on your mind, {capitalize(this.props.currentUser.fname)}?
                            </p>
                            : <p onClick={() => this.props.showModal()}>
                                Write something to {capitalize(this.props.user.fname)}...
                            </p>
                        }
                    </div>
                </div>
            )
        }

        return (
            <div className="news-feed-post-container profile">
                <Modal />
                {createPostButton()}
                <PostIndexContainer />
            </div>
        )
    }
}

const mSTP = ({ entities: { users } }, ownProps) => ({
    user: users[ownProps.match.params.userId]
})

const mDTP = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId))
})

export default withRouter(connect(mSTP, mDTP)(ProfilePostIndex));
