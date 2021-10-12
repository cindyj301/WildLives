export const createFriendship = (friendship) => {
  return $.ajax({
    url: "/api/friends",
    method: "POST",
    data: friendship,
  });
};

export const deleteFriendship = (friendshipId) => {
  return $.ajax({
    url: `/api/friends/${friendshipId}`,
    method: "DELETE",
  });
};
