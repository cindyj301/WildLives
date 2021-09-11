import React from 'react'

import { capitalize } from '../../util/format_util';

class EditPostModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.post;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.props.fetchPost(this.props.postId);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updatePost(this.state)
            .then(this.props.hideModal)
    }

    handleChange() {
        this.setState({ body: this.state });
    }
    
    render() {
        const editForm = () => {
            <div className="modal-background edit-form">
                <div className="modal-child edit-form">
                    <div className="modal-post-edit-container">
                        <div className="modal-header edit-form">
                            <div className="modal-header-text edit-form">
                                <p>Edit Post</p>
                            </div>
                            <img
                                className="modal-close edit-form"
                                src={close}
                                onClick={() => this.props.hideModal()}
                            />
                        </div>
                        <div className="edit-form-profile-icon-container">
                            <div className="profile-icon-container edit-form">
                                <img
                                    className="profile-icon"
                                    src="https://scontent.fhou1-1.fna.fbcdn.net/v/t1.30497-1/cp0/p80x80/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&amp;ccb=1-5&amp;_nc_sid=7206a8&amp;_nc_ohc=T_q5miqWSkYAX_JRnzV&amp;_nc_ht=scontent.fhou1-1.fna&amp;oh=4ffecdaf87316f82d0d86f5fcbc40618&amp;oe=615AAEF6"
                                    alt='profile-icon'
                                />
                                <span>{capitalize(this.props.currentUser.fname) + " " + capitalize(this.props.currentUser.lname)}</span>
                            </div>
                        </div>
                        <form className="modal-form edit-form" onSubmit={this.handleSubmit}>
                            <textarea
                                className="modal-post-edit-input"
                                value={this.state.body}
                                onChange={this.handleChange}
                                rows="14"
                                cols="10"
                                wrap="soft"
                            />
                            <button className="modal-post-edit-button">
                                <p>Save</p>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        }

        return(
            <div>
               {this.props.modal && editForm()} 
                <div className="post-menu-item" onClick={() => this.props.showModal()}>
                    <img width="20" height="20" src={editIcon} alt="edit-post" />
                    <p className="modify-post-text">Edit Post</p>
                </div>
            </div>
        )
    }
}

export default EditPostModal;