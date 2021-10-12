import * as FriendAPIUtil from "../util/friend_util";

export const RECEIVE_FRIENDSHIP = "RECEIVE_FRIENDSHIP";
export const RECEIVE_FRIENDSHIPS = "RECEIVE_FRIENDSHIPS";
export const REMOVE_FRIENDSHIP = "REMOVE_FRIENDSHIP";

const receiveFriendship = (friendship) => ({
  type: RECEIVE_FRIENDSHIP,
  friendship,
});

const receiveFriendships = (friendships) => ({
  type: RECEIVE_FRIENDSHIPS,
  friendships,
});

const removeFriendship = (friendshipId) => ({
  type: REMOVE_FRIENDSHIP,
  friendshipId,
});

export const fetchFriendships = (userId) => (dispatch) =>
  FriendAPIUtil.fetchFriendships(userId).then((friendships) =>
    dispatch(receiveFriendships(friendships))
  );

export const createFriendship = (friendship) => (dispatch) =>
  FriendAPIUtil.createFriendship(friendship).then((friendship) =>
    dispatch(receiveFriendship(friendship))
  );

export const deleteFriendship = (friendshipId) => (dispatch) =>
  FriendAPIUtil.deleteFriendship(friendshipId).then(() =>
    dispatch(removeFriendship(friendshipId))
  );
