import React from 'react'

import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    formatDate(createdAt) {
        const dateOptions = { month: 'long', day: 'numeric' };
        const dateYearOptions = { month: 'long', day: 'numeric', year: 'numeric' };
        const timeOptions = { hour: 'numeric', minute: '2-digit' };

        const date = new Date(createdAt);
        let time = Date.now() - Date.parse(date); // parsed date is returned in ms

        if (date.year === Date.now.year && Math.floor(time / 86400000) > 0) { // if current year && time > 24h
            return `${date.toLocaleDateString('en-US', dateOptions)} at ${ date.toLocaleTimeString('en-US', timeOptions) }`; // return date without year
        } else if (date.year !== Date.now.year && Math.floor(time / 86400000) > 0) { // if not current year && time > 24h
            return `${date.toLocaleDateString('en-US', dateYearOptions)} at ${date.toLocaleTimeString('en-US', timeOptions)}`; // return date with year
        } else if (Math.floor(time / 3600000) > 0) { // if greater than 1h
            return Math.floor(time / 3600000) + 'h';
        } else { // if greater than 1m
            return Math.floor(time / 60000) + 'm'
        }
    }

    render() {
        const { posts, currentUser } = this.props;

        return (
            <div className="post-item-class-container">
                {posts.map(post => (
                    <PostIndexItem
                        key={post.id}
                        postId={post.id}
                        body={post.body}
                        postAuthorId={post.postAuthorId}
                        currentUserId={currentUser.id}
                        fname={post.author.fname}
                        lname={post.author.lname}
                        date={this.formatDate(post.createdAt)}
                    />
                ))}
            </div>
        )
    }
}

export default PostIndex;