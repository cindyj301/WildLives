import React from 'react';

import { capitalize } from '../../util/format_util';

class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: this.props.post.body,
            photoFile: null,
            photoUrl: null // image url before being uploaded
        };

        this.postId = this.props.post.id;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(); // instantiate new FormData object to upload file and send to server to be saved
        formData.append("post[body]", this.state.body); // using append method to add key/values to server (make sure keys match strong params in rails controller)

        if (this.state.photoFile) {
            formData.append("post[photo]", this.state.photoFile);
        }

        this.props.processForm(formData, this.postId).then(this.props.hideModal());
    }

    handleFile(e) {
        const file = e.currentTarget.files[0]; // extract first file in files object
        const fileReader = new FileReader(); // On change of the file input component we instantiate a new FileReader object.
        
        fileReader.onloadend = () => { // cb that will run when reading file is finished
            this.setState({ photoFile: file, photoUrl: fileReader.result }); // success fxn for when file loads
        };

        if (file) {
            fileReader.readAsDataURL(file); // reading file
        }
    }

    handleChange(e) {
        this.setState({ body: e.currentTarget.value });
    }

    render() {
        const { formType, currentUser, hideModal, submitType } = this.props;
        const preview = this.state.photoUrl ? 
            <img className="photo-preview" src={this.state.photoUrl} />
            : <div></div>;

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
                        { currentUser.profilePic ? 
                            <img src={currentUser.profilePic} className="profile-icon" alt='profile-icon' />
                           : <img
                                className="profile-icon"
                                src="https://scontent.fhou1-1.fna.fbcdn.net/v/t1.30497-1/cp0/p80x80/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&amp;ccb=1-5&amp;_nc_sid=7206a8&amp;_nc_ohc=T_q5miqWSkYAX_JRnzV&amp;_nc_ht=scontent.fhou1-1.fna&amp;oh=4ffecdaf87316f82d0d86f5fcbc40618&amp;oe=615AAEF6"
                                alt='profile-icon'
                            />
                        }
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
                    <div className="photo-preview-container">{preview}</div>
                    <div className="photo-upload-container">
                        <label className="photo-upload" htmlFor="file-input">
                            <span className="photo-upload-text">Add to Your Post</span>
                            <div className="photo-upload-input">
                                <img width="34" height="34" src={photoUpload} alt="upload-photo" />
                            </div>
                        </label>
                        <input
                            type="file"
                            id="file-input"
                            onChange={this.handleFile}
                        />
                    </div>
                    <button className="modal-post-form-button">
                        <p>{submitType}</p>
                    </button>
                </form>
            </div>
        )
    }
}

export default PostForm;