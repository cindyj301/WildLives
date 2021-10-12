import * as FriendAPIUtil from "../util/friend_util";

export const RECEIVE_FRIENDSHIP = "RECEIVE_FRIENDSHIP";
export const REMOVE_FRIENDSHIP = "REMOVE_FRIENDSHIP";

const receiveFriendship = (friendship) => ({
  type: RECEIVE_FRIENDSHIP,
  friendship,
});

const removeFriendship = (friendshipId) => ({
  type: REMOVE_FRIENDSHIP,
  friendshipId,
});

export const createFriendship = (friendship) => (dispatch) =>
  FriendAPIUtil.createFriendship(friendship).then((friendship) =>
    dispatch(receiveFriendship(friendship))
  );

export const deleteFriendship = (friendshipId) => (dispatch) =>
  FriendAPIUtil.deleteFriendship(friendshipId).then(() =>
    dispatch(removeFriendship(friendshipId))
  );
