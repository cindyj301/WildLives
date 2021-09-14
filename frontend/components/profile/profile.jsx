import React from 'react';



class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        const {  } = this.props;

        return (
            <div>
                <ProfileHeader />
                <ProfilePostIndex />
                <ProfileSideBar />
            </div>
        )
    }
}

export default Profile;
