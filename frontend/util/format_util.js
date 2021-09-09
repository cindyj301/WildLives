export const capitalize = name => name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();

export const allPosts = ({ posts }) => Object.keys(posts).map(id => posts[id]);