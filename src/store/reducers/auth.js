import {SET_AUTH_USER, SET_AUTH_USER_DATA} from "../actions";

const initialState = {
  userId: null,
  login: null,
  email: null,
  isLogin: false,
  user: null,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.data,
        isLogin: true,
      };

    case SET_AUTH_USER:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default auth;
