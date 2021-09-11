import React from "react";
import { connect } from "react-redux"

import PostForm from "./post_form";
import { hideModal, showModal } from '../../actions/modal_actions';
import { updatePost, fetchPost } from '../../actions/post_actions';

class EditPostForm extends React.Component {
    componentDidMount() {
        this.props.fetchPost(this.props.postId)
    }

    render() {
        const { processForm, formType, post, submitType, currentUser, showModal, hideModal } = this.props;

        if (!post) return null;

        return (
            <PostForm 
                processForm={processForm}
                formType={formType}
                post={post}
                submitType={submitType}
                currentUser={currentUser}
                showModal={showModal}
                hideModal={hideModal}
            />
        )
    }
}

const mSTP = ({ entities: { users, posts }, session }, ownProps) => {

    return {
        post: posts[ownProps.postId],
        currentUser: users[session.id],
        formType: 'Edit Post',
        submitType: 'Save',
        postId: ownProps.postId
    }
}

const mDTP = dispatch => ({
    hideModal: () => dispatch(hideModal()),
    showModal: () => dispatch(showModal('edit')),
    processForm: post => dispatch(updatePost(post)),
    fetchPost: postId => dispatch(fetchPost(postId))
})

export default connect(mSTP, mDTP)(EditPostForm);
