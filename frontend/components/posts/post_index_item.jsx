import React from 'react'

// component imports
import PostModifyIcon from './post_modify_icon';
import CommentIndexContainer from '../comments/comment_index_container';

// util imports
import { capitalize } from '../../util/format_util';

const PostIndexItem = ({ body, fname, lname, date, postId, postAuthorId, currentUserId, post, comments }) => {
    const modifyIcon = () => (
        <img
            src={modifyPost}
            alt="modify-post"
            className="modify-post-icon"
        />
    )

    const modifyPostOptions = () => {
        return (postAuthorId === currentUserId) ? (
            <PostModifyIcon icon={modifyIcon()} postId={postId} />
        ) : null; 
    }

    const postPhoto = () => {
        return (post.photoUrl) ? (
            <div className="post-photo">
                <img src={post.photoUrl} alt="post-photo" />
            </div>
        ) : null;
    }

    return (
        <div className="post-index-item-container">
            <div className="post-item-header-container">
                <div className="post-item-profile-container">
                    <img
                        className="profile-icon post-item"
                        src="https://scontent.fhou1-1.fna.fbcdn.net/v/t1.30497-1/cp0/p80x80/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&amp;ccb=1-5&amp;_nc_sid=7206a8&amp;_nc_ohc=T_q5miqWSkYAX_JRnzV&amp;_nc_ht=scontent.fhou1-1.fna&amp;oh=4ffecdaf87316f82d0d86f5fcbc40618&amp;oe=615AAEF6"
                        alt='profile-icon'
                    />
                    <div className="name-date-container">
                        <span className="name">{capitalize(fname) + " " + capitalize(lname)}</span>
                        <span className="date">{date}</span>
                    </div>
                </div>
                {modifyPostOptions()}
            </div>
            <div className="post-body">
                {body}
            </div>
            {postPhoto()}
            <CommentIndexContainer
                comments={comments}
                postId={postId}
            />
        </div>
    )
}

export default PostIndexItem;
