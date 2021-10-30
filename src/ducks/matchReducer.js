const initialState = [];

const USER_MATCHES = 'USER_MATCHES';

export function userMatches(matchArr) {
  return {
    type: USER_MATCHES,
    payload: matchArr,
  };
}

export default function matchReducer(state = initialState, action) {
  const { type, payload } = action;

  console.log(type);
  switch (type) {
    case USER_MATCHES:
      return [...state, payload];
    default:
      return state;
  }
}
