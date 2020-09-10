import * as Api from '../../api';

export const ADD_POST = 'ADD_POST';
export const SET_USER_PROFILE = 'SET_USER_PROFILE';
export const SET_USER_STATUS = 'SET_USER_STATUS';

const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

const setUserStatus = status => ({ type: SET_USER_STATUS, status });

export const addPost = (value, image) => {
  return {
    type: ADD_POST,
    text: value,
    image,
  };
};

export const getUser = (userId) => (dispatch) => {
  Api.Users.getById(userId).then((data) => dispatch(setUserProfile(data)));
};

export const getUserStatus = (userId) => dispatch => {
  Api.Users.getStatus(userId).then(data => {
    dispatch(setUserStatus(data));
  });
};

export const updateUserStatus = (status) => dispatch => {
  Api.Users.updateStatus(status).then(res => {
    if (res.resultCode === 0) {
      dispatch(setUserStatus(status));
    }
  });
};