import React, { Component } from 'react'

import { capitalize } from '../../util/format_util'

export default class ProfileHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coverPhoto: null,
            profilePic: null,
            coverPhotoUrl: null,
            profPhotoUrl: null,
            open: false
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleProfModal = this.handleProfModal.bind(this);
    }

    toggleModal() {
        this.setState({ open: !this.state.open })
    }

    handleFile(field) {
        return e => {
            const file = e.currentTarget.files[0];
            const fileReader = new FileReader();

            let photoUrl;

            if (field === 'coverPhoto') {
                photoUrl = "coverPhotoUrl";
            } else if (field === 'profilePic') {
                photoUrl = "profPhotoUrl";
            }

            fileReader.onloadend = () => {
                this.setState({ [field]: file, [photoUrl]: fileReader.result });
            };

            if (file) {
                fileReader.readAsDataURL(file);
                this.toggleModal();
            }
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append('user[id]', this.props.currentUser.id);

        if (this.state.coverPhotoUrl) {
            formData.append('user[cover_photo]', this.state.coverPhoto);
        } else if (this.state.profPhotoUrl) {
            formData.append('user[profile_pic]', this.state.profilePic);
        }

        this.props.updateUser(formData).then(this.toggleModal());
    }

    handleCancel() {
        this.setState({ coverPhotoUrl: null });
        this.toggleModal();
    }

    handleProfModal() {
        console.log("in modal");
    }

    render() {
        const { currentUser } = this.props;

        const coverPhotoPreview = this.state.coverPhotoUrl ?
            <img src={this.state.coverPhotoUrl} className="cover-photo-img" />
            : <div className="cover-photo"></div>;

        const coverPhotoModal = this.state.open ?
            <div className="cover-photo modal-background">
                <div className="cover-photo modal-child" onClick={e => e.stopPropagation()}>
                    <button className="cover-photo-modal-button cancel" onClick={this.handleCancel}>
                        <span>Cancel</span>
                    </button>
                    <button className="cover-photo-modal-button" onClick={this.handleSubmit}>
                        <span>Save Changes</span>
                    </button>
                </div>
            </div>
            : null;

        const profilePicPreview = this.state.profPhotoUrl ?
            <img src={this.state.profPhotoUrl} className="profile-pic-img" />
            : <img
                src="https://scontent.fhou1-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=3YCurt1IZskAX_WRAzK&_nc_ht=scontent.fhou1-1.fna&oh=a54fc5a653174e187629be9f492266f1&oe=616682F8"
                className="profile-page-pic"
                alt="profile-pic"
            />

        return (
            <div className="profile-header-container">
                {coverPhotoModal}
                <div className="profile-pics-container">
                    <div className="cover-photo-container">     
                        <div className="cover-photo-upload-container">
                            {coverPhotoPreview}
                            { (currentUser.coverPhoto) ?
                                <img src={currentUser.coverPhoto} alt="cover-photo" /> :
                                <div className="cover-photo"></div> }
                            <div className="cover-photo-upload-label-container">
                                <label className="cover-photo-upload-label" htmlFor="cover-photo-input">
                                    <img className="cover-photo-upload-icon" src={camera} alt="add-cover-photo" />
                                    <span>Add Cover Photo</span>
                                </label>
                                <input
                                    type="file"
                                    id="cover-photo-input"
                                    onChange={this.handleFile('coverPhoto')}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="profile-pic-upload-container">
                        <label className="profile-pic-upload-label" htmlFor="profile-pic-input">
                            <img className="profile-pic-upload-icon" src={camera} alt="profile-pic" />
                        </label>
                        <input
                            type="file"
                            id="profile-pic-input"
                            onChange={this.handleFile('profilePic')}
                        />
                    </div>
                    {/* {profPicModal} */}
                    <img
                        src="https://scontent.fhou1-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-5&_nc_sid=7206a8&_nc_ohc=3YCurt1IZskAX_WRAzK&_nc_ht=scontent.fhou1-1.fna&oh=a54fc5a653174e187629be9f492266f1&oe=616682F8"
                        className="profile-page-pic"
                        alt="profile-pic"
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
                            <span className="add-friend-text">Add Friend</span>
                        </div>
                    </ul>
                </div>
            </div>
        )
    }
}
