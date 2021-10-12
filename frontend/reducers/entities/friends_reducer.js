import {
  RECEIVE_FRIENDSHIP,
  REMOVE_FRIENDSHIP,
  RECEIVE_FRIENDSHIPS,
} from "../../actions/friend_actions";

const friendsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_FRIENDSHIPS:
      return action.friendships;
    case RECEIVE_FRIENDSHIP:
      nextState[action.friendship.id] = action.friendship;
      return nextState;
    case REMOVE_FRIENDSHIP:
      delete nextState[action.friendshipId];
      return nextState;
    default:
      return state;
  }
};

export default friendsReducer;
