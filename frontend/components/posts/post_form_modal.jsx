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
        this.props.createPost(this.state).then(this.props.hideModal);
    }

    handleChange(e) {
        this.setState({ body: e.target.value });
    }

    renderErrors() {
        const { errors } = this.props;
        return (
            <ul>
                {errors.map((error, idx) => (
                    <li key={`error-${idx}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        const postForm = () => {
            return (
                <div className="modal-container">
                    <div className="modal">
                        <div className="modal-header">
                            <div className="modal-header-text">
                                <div>Create Post</div>
                            </div>
                            <img
                                className="modal-close"
                                src="https://static.xx.fbcdn.net/rsrc.php/v3/y2/r/__geKiQnSG-.png"
                                width="24"
                                height="24"
                                onClick={() => this.props.hideModal()}
                            />
                        </div>
                        <form className="modal-form" onSubmit={this.handleSubmit}>
                            {this.renderErrors()}
                            <input
                                type="text"
                                value={this.state.body}
                                onChange={this.handleChange}
                            />
                            <button>Post</button>
                        </form>
                    </div>
                </div>
            )
        }

        return (
            <div>
                {this.props.modal && postForm()}
                <div className="post-form-button-container">
                    <div className='post-form-button' onClick={() => this.props.showModal()}>
                        <li className="profile-container">
                            <img
                                className="profile-icon"
                                src="https://scontent.fhou1-1.fna.fbcdn.net/v/t1.30497-1/cp0/p80x80/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&amp;ccb=1-5&amp;_nc_sid=7206a8&amp;_nc_ohc=T_q5miqWSkYAX_JRnzV&amp;_nc_ht=scontent.fhou1-1.fna&amp;oh=4ffecdaf87316f82d0d86f5fcbc40618&amp;oe=615AAEF6"
                                alt='profile-icon'
                            />
                        </li>
                        <p>What's on your mind, {capitalize(this.props.currentUser.fname)}?</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostFormModal;