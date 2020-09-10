import * as Api from '../../api';

export const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
export const SET_AUTH_USER = 'SET_AUTH_USER';
export const SET_CAPTCHA = 'SET_CAPTCHA';

const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_AUTH_USER_DATA,
  data: { userId, email, login, isAuth },
});

const setAuthUser = (user) => ({ type: SET_AUTH_USER, user });
const setCaptcha = captcha => ({ type: SET_CAPTCHA, captcha });

export const login = () => (dispatch) => {
  Api.Auth.me().then((data) => {
    if (data.resultCode === 0) {
      const { id, login, email } = data.data;
      dispatch(setAuthUserData(id, email, login, true));
      Api.Users.getById(id).then((data) => dispatch(setAuthUser(data)));
    }
  });
};

export const signIn = (email, password, rememberMe, captcha) => dispatch => {
  Api.Auth.signIn(email, password, rememberMe, captcha).then(res => {
    if (res.data.resultCode === 0) {
      dispatch(login());
    } else if (res.data.resultCode === 10) {
      Api.Auth.getCaptcha().then(res => dispatch(setCaptcha(res.data.url)));
    }
  });
};

export const signOut = () => dispatch => {
  Api.Auth.signOut().then(res => {
    if (res.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
      dispatch(setAuthUser(null));
    }
  });
};