export const capitalize = (name) =>
  name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();

export const allPosts = ({ posts }, user) => {
  return Object.keys(posts)
    .map((id) => posts[id])
    .reverse()
    .filter(
      (posts) =>
        user.friends.map((friend) => friend.id).includes(posts.postAuthorId) ||
        posts.postAuthorId === user.id
    );
};

export const userPosts = ({ posts }, user) =>
  Object.keys(posts)
    .map((id) => posts[id])
    .reverse()
    .filter((post) => post.wallId === user.id);

export const allComments = ({ comments }) =>
  Object.keys(comments).map((id) => comments[id]);

export const isFriend = (friends = [], currentUser) =>
  friends.some((friend) => friend.id == currentUser.id);

export const allUsers = (users, friends, currentUserId) => {
  return users.filter(
    (user) =>
      !friends.map((friend) => friend.id).includes(user.id) &&
      user.id !== currentUserId
  );
};

export const formatDate = (createdAt) => {
  const dateOptions = { month: "long", day: "numeric" };
  const dateYearOptions = { month: "long", day: "numeric", year: "numeric" };
  const timeOptions = { hour: "numeric", minute: "2-digit" };

  const date = new Date(createdAt);
  let time = Date.now() - Date.parse(date); // parsed date is returned in ms

  if (date.year === Date.now.year && Math.floor(time / 86400000) > 0) {
    // if current year && time > 24h
    return `${date.toLocaleDateString(
      "en-US",
      dateOptions
    )} at ${date.toLocaleTimeString("en-US", timeOptions)}`; // return date without year
  } else if (date.year !== Date.now.year && Math.floor(time / 86400000) > 0) {
    // if not current year && time > 24h
    return `${date.toLocaleDateString(
      "en-US",
      dateYearOptions
    )} at ${date.toLocaleTimeString("en-US", timeOptions)}`; // return date with year
  } else if (Math.floor(time / 3600000) > 0) {
    // if greater than 1h
    return Math.floor(time / 3600000) + "h";
  } else {
    // if greater than 1m
    return Math.floor(time / 60000) + "m";
  }
};
