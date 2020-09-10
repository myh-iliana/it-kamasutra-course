import { SET_AUTH_USER, SET_AUTH_USER_DATA, SET_CAPTCHA } from '../actions/auth';

const initialState = {
  userId: null,
  login: null,
  email: null,
  isAuth: false,
  user: null,
  captcha: null,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.data,
        captcha: null,
      };

    case SET_AUTH_USER:
      return {
        ...state,
        user: action.user,
      };

    case SET_CAPTCHA:
      return {
        ...state,
        captcha: action.captcha,
      };

    default:
      return state;
  }
};

export default auth;
