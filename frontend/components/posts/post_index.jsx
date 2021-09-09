import React from 'react'

import PostIndexItem from './post_index_item';

class PostIndex extends React.Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>
                {this.props.posts.map(post => (
                    <PostIndexItem
                        key={post.id}
                        post={post}
                        author={post.author}
                    />
                ))}
            </div>
        )
    }
}

export default PostIndex;