const initialState = {
  email: "",
  password: "",
  first_name: "",
  number_of_kids: "",
  favorite_food: "",
  embarrassing_moment: "",
  gender: "",
  photo: "",
};

const REGISTER_USER = "REGISTER_USER";
const LOGIN_USER = "LOGIN_USER";
const CLEAR_USER = "CLEAR_USER";

export function registerUser(userObj) {
  return {
    type: REGISTER_USER,
    payload: userObj,
  };
}

export function loginUser(email) {
  return {
    type: LOGIN_USER,
    payload: email,
  };
}

// export function clearUser() {
//   return {
//     type: CLEAR_USER,
//     payload: {},
//   };
// }

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_USER:
      return { ...state, user: payload };
    case LOGIN_USER:
      return { ...state, user: payload };
    // case CLEAR_USER:
    //   return { ...state, user: payload };
    default:
      return state;
  }
}
