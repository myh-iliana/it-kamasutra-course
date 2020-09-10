import * as Api from '../../api';

export const FOLLOW_USER = 'FOLLOW_USER';
export const UNFOLLOW_USER = 'UNFOLLOW_USER';
export const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';
export const TOGGLE_IS_FOLLOWING_USERS = 'TOGGLE_IS_FOLLOWING_USERS';
export const SET_USERS = 'SET_USERS';
export const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

const followUserSuccess = (userId) => ({ type: FOLLOW_USER, userId });
const unfollowUserSuccess = (userId) => ({ type: UNFOLLOW_USER, userId });
const setIsFollowingUsers = (isLoading, userId) => ({
  type: TOGGLE_IS_FOLLOWING_USERS,
  isLoading,
  userId,
});
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
  Api.Users.unfollow(userId).then((data) => {
    if (data.resultCode === 0) {
      dispatch(unfollowUserSuccess(userId));
      dispatch(setIsFollowingUsers(false, userId));
    }
  });
};