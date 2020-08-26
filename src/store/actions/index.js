import * as Api from '../../api';

export const ADD_MESSAGE = 'ADD_MESSAGE';
export const ADD_POST = 'ADD_POST';
export const FOLLOW_USER = 'FOLLOW_USER';
export const UNFOLLOW_USER = 'UNFOLLOW_USER';
export const SET_USERS = 'SET_USERS';
export const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
export const SET_USER_PROFILE = 'SET_USER_PROFILE';
export const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';
export const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
export const SET_AUTH_USER = 'SET_AUTH_USER';
export const TOGGLE_IS_FOLLOWING_USERS = 'TOGGLE_IS_FOLLOWING_USERS';

export const addMessage = (chatId, ownerId, text) => {
  const createdAt = new Date(Date.now());

  return {
    type: ADD_MESSAGE,
    chatId,
    ownerId,
    text,
    createdAt: createdAt.toLocaleTimeString(),
  };
};
export const addPost = (value, image) => {
  return {
    type: ADD_POST,
    text: value,
    image,
  };
};

const followUserSuccess = (userId) => ({ type: FOLLOW_USER, userId });
const unfollowUserSuccess = (userId) => ({ type: UNFOLLOW_USER, userId });
const setIsFollowingUsers = (isLoading, userId) => ({
  type: TOGGLE_IS_FOLLOWING_USERS,
  isLoading,
  userId,
});

const setAuthUserData = (userId, email, login) => ({
  type: SET_AUTH_USER_DATA,
  data: { userId, email, login },
});
const setAuthUser = (user) => ({ type: SET_AUTH_USER, user });

const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

const setIsLoading = (isLoading) => ({ type: TOGGLE_IS_LOADING, isLoading });
const setUsers = (users) => ({ type: SET_USERS, users });
const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount });

export const getUsers = (currentPage, pageSize) => (dispatch) => {
  dispatch(setIsLoading(true));
  Api.Users.getAll(currentPage, pageSize).then((data) => {
    dispatch(setIsLoading(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
  });
};
export const followUser = (userId) => (dispatch) => {
  dispatch(setIsFollowingUsers(true, userId));
  Api.Users.follow(userId).then((data) => {
    if (data.resultCode === 0) {
      dispatch(followUserSuccess(userId));
      dispatch(setIsFollowingUsers(false, userId));
    }
  });
};
export const unfollowUser = (userId) => (dispatch) => {
  dispatch(setIsFollowingUsers(true, userId));
  Api.Users.follow(userId).then((data) => {
    if (data.resultCode === 0) {
      dispatch(unfollowUserSuccess(userId));
      dispatch(setIsFollowingUsers(false, userId));
    }
  });
};
export const getUser = (userId) => (dispatch) => {
  Api.Users.getById(userId).then((data) => dispatch(setUserProfile(data)));
};
export const signIn = () => (dispatch) => {
  Api.Auth.signIn().then((data) => {
    if (data.resultCode === 0) {
      const { id, login, email } = data.data;
      dispatch(setAuthUserData(id, email, login));
      Api.Users.getById(id).then((data) => dispatch(setAuthUser(data)));
    }
  });
};
