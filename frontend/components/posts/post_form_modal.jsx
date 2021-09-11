import React from 'react';

import { capitalize } from '../../util/format_util';

class PostFormModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createPost(this.state)
            .then(this.props.hideModal)
            .then(this.setState({ body: '' }));
    }

    handleChange(e) {
        this.setState({ body: e.currentTarget.value });
    }

    render() {
        const postForm = () => {
            return (
                <div className="modal-background post-form">
                    <div className="modal-child post-form">
                        <div className="modal-post-form-container">
                            <div className="modal-header post-form">
                                <div className="modal-header-text post-form">
                                    <p>Create Post</p>
                                </div>
                                <img
                                    className="modal-close post-form"
                                    src={close}
                                    onClick={() => this.props.hideModal()}
                                />
                            </div>
                            <div className="post-form-profile-icon-container">
                                <div className="profile-icon-container post-form">
                                    <img
                                        className="profile-icon"
                                        src="https://scontent.fhou1-1.fna.fbcdn.net/v/t1.30497-1/cp0/p80x80/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&amp;ccb=1-5&amp;_nc_sid=7206a8&amp;_nc_ohc=T_q5miqWSkYAX_JRnzV&amp;_nc_ht=scontent.fhou1-1.fna&amp;oh=4ffecdaf87316f82d0d86f5fcbc40618&amp;oe=615AAEF6"
                                        alt='profile-icon'
                                    />
                                    <span>{capitalize(this.props.currentUser.fname) + " " + capitalize(this.props.currentUser.lname)}</span>
                                </div>
                            </div>
                            <form className="modal-form post-form" onSubmit={this.handleSubmit}>
                                <textarea
                                    className="modal-post-form-input"
                                    placeholder="Feelin' wild"
                                    value={this.state.body}
                                    onChange={this.handleChange}
                                    rows="14"
                                    cols="10"
                                    wrap="soft"
                                />
                                <button className="modal-post-form-button">
                                    <p>Post</p>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <div>
                {this.props.modal && postForm()}
                <div className="post-form-button-container">
                    <div className='post-form-button'>
                        <li className="profile-container">
                            <img
                                className="profile-icon"
                                src="https://scontent.fhou1-1.fna.fbcdn.net/v/t1.30497-1/cp0/p80x80/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&amp;ccb=1-5&amp;_nc_sid=7206a8&amp;_nc_ohc=T_q5miqWSkYAX_JRnzV&amp;_nc_ht=scontent.fhou1-1.fna&amp;oh=4ffecdaf87316f82d0d86f5fcbc40618&amp;oe=615AAEF6"
                                alt='profile-icon'
                            />
                        </li>
                        <p onClick={() => this.props.showModal()}>What's on your mind, {capitalize(this.props.currentUser.fname)}?</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostFormModal;