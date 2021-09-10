import React from 'react'

import { capitalize } from '../../util/format_util';

const PostIndexItem = ({ body, fname, lname, date }) => {
    return (
        <div className="post-index-item-container">
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
            <div className="post-body">
                {body}
            </div>
            <div className="comment-container">
                <div className="comment-background-area">
                    <img src={comment} alt="comment" className="comment-icon" />
                    <span className="comment-text">Comment</span>
                </div>
            </div>
            <div className="comment-input-container">
                <img
                    className="profile-icon post-item comment-input"
                    src="https://scontent.fhou1-1.fna.fbcdn.net/v/t1.30497-1/cp0/p80x80/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&amp;ccb=1-5&amp;_nc_sid=7206a8&amp;_nc_ohc=T_q5miqWSkYAX_JRnzV&amp;_nc_ht=scontent.fhou1-1.fna&amp;oh=4ffecdaf87316f82d0d86f5fcbc40618&amp;oe=615AAEF6"
                    alt='profile-icon'
                />
                <input {/* refactor to comment component ?? (change this component to class then */}
                    type="text"
                    // className=""
                />
            </div>
        </div>
    )
}

export default PostIndexItem;
