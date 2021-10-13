export const createFriendship = (friendship) => {
  return $.ajax({
    url: "/api/friends",
    method: "POST",
    data: friendship,
    processData: false,
    contentType: false,
  });
};

export const deleteFriendship = (friendshipId) => {
  return $.ajax({
    url: `/api/friends/${friendshipId}`,
    method: "DELETE",
  });
};
