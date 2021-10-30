// I personally wouldn't want to store login info in the store becauses this persists.  We can talk about what else we can store here.  I normall would store everything but the password.  And handle the registering and login in on the actual component.s

const initialState = {
  email: '',
  password: '',
  first_name: '',
  number_of_kids: '',
  favorite_food: '',
  embarrassing_moment: '',
  gender: '',
  photo: '',
};

const REGISTER_USER = 'REGISTER_USER';
const LOGIN_USER = 'LOGIN_USER';
const CLEAR_USER = 'CLEAR_USER';

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

export default function userReducer(state = initialState, action) {
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
