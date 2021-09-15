import {
    RECEIVE_FRIENDSHIP,
    REMOVE_FRIENDSHIP,
    RECEIVE_FRIENDSHIPS
} from "../../actions/friend_actions";

const friendsReducer = (state = {}, action) => {
    let nextState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_FRIENDSHIP:
            return {...state, [action.friendship.id]: action.friendship };
        case RECEIVE_FRIENDSHIPS:
            return {...state, [action.friendships]: action.friendships };
        case REMOVE_FRIENDSHIP:
            delete nextState[action.friendshipId];
            return nextState;
        default:
            return state;
    }
}

export default friendsReducer;