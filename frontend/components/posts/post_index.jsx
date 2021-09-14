import React from 'react'

import PostIndexItem from './post_index_item';
import { formatDate } from '../../util/format_util';

class PostIndex extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
        this.props.fetchComments();
    }

    render() {
        const { posts, currentUser, comments } = this.props;
        
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
                        date={formatDate(post.createdAt)}
                        post={post}
                        comments={comments.filter(comment => comment.postId === post.id )}
                    />
                ))}
            </div>
        )
    }
}

export default PostIndex;