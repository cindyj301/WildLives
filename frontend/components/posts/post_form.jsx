import React from 'react';

import { capitalize } from '../../util/format_util';

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.post;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        let formData = new FormData();
        formData.append("post[body]", this.state.body);

        this.props.processForm(formData, this.state.id).then(this.props.hideModal());
    }

    handleChange(e) {
        this.setState({ body: e.currentTarget.value });
    }

    render() {
        const { formType, currentUser, hideModal, submitType, post } = this.props;

        if (!post) return null;

        return (
            <div className="modal-post-form-container">
                <div className="modal-header post-form">
                    <div className="modal-header-text post-form">
                        <p>{formType}</p>
                    </div>
                    <img
                        className="modal-close post-form"
                        src={close}
                        onClick={() => hideModal()}
                    />
                </div>
                <div className="post-form-profile-icon-container">
                    <div className="profile-icon-container post-form">
                        <img
                            className="profile-icon"
                            src="https://scontent.fhou1-1.fna.fbcdn.net/v/t1.30497-1/cp0/p80x80/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&amp;ccb=1-5&amp;_nc_sid=7206a8&amp;_nc_ohc=T_q5miqWSkYAX_JRnzV&amp;_nc_ht=scontent.fhou1-1.fna&amp;oh=4ffecdaf87316f82d0d86f5fcbc40618&amp;oe=615AAEF6"
                            alt='profile-icon'
                        />
                        <span>{capitalize(currentUser.fname) + " " + capitalize(currentUser.lname)}</span>
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
                        <p>{submitType}</p>
                    </button>
                </form>
            </div>
        )
    }
}

export default PostForm;