import React from 'react'

import { capitalize } from '../../util/format_util';

const PostIndexItem = ({ body, fname, lname, date }) => {
    return (
        <div className="post-index-item-container">
            <div className="post-item-profile-container">
                <div className="profile-icon-container post-form">
                    <img
                        className="profile-icon"
                        src="https://scontent.fhou1-1.fna.fbcdn.net/v/t1.30497-1/cp0/p80x80/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&amp;ccb=1-5&amp;_nc_sid=7206a8&amp;_nc_ohc=T_q5miqWSkYAX_JRnzV&amp;_nc_ht=scontent.fhou1-1.fna&amp;oh=4ffecdaf87316f82d0d86f5fcbc40618&amp;oe=615AAEF6"
                        alt='profile-icon'
                    />
                    <span>{capitalize(fname) + " " + capitalize(lname)}</span>
                    <span>{date}</span>
                </div>
            </div>
            <div className="comment-bar">
            </div>
            <div className="post-index-item">
                {body}
            </div>
            <div>
                comment input
            </div>
        </div>
    )
}

export default PostIndexItem;
