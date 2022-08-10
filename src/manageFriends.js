// const initialState = { friends: [] };

export function manageFriends(state, action) {
  switch (action.type) {
    case "friends/add":
      return {friends:[...state.friends, action.friend]};
    default:
      return state;
  }
}
