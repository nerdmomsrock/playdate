// I personally wouldn't want to store login info in the store becauses this persists.  We can talk about what else we can store here.  I normall would store everything but the password.  And handle the registering and login in on the actual component.s

const initialState = {
  email: '',
  password: '',
  first_name: '',
  // number_of_kids: '',  Nathan - I'm not sure where this is coming from since most kid things are labeled your_kids and their_kids
  your_kids: 0,
  their_kids: 0,
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
      const {
        email,
        password,
        first_name,
        your_kids,
        their_kids,
        favorite_food,
        embarrassing_moment,
        gender,
        photo,
      } = payload;
      // return { ...state, user: payload };  Nathan - the way this is currently written, you are creating a copy of initialState and then a new key called user (so you have {user{initialState, user{}}})
      return {
        ...state,
        email,
        password,
        first_name,
        your_kids,
        their_kids,
        favorite_food,
        embarrassing_moment,
        gender,
        photo,
      };

    // case LOGIN_USER:
    //   // return { ...state, user: payload }; Nathan - you probably don't need this since REGISTER_USER performs the same function

    // case CLEAR_USER:
    //   return { ...state, user: payload };
    default:
      return state;
  }
}
