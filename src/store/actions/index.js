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

export const followUser = (userId) => ({ type: FOLLOW_USER, userId });
export const unfollowUser = (userId) => ({ type: UNFOLLOW_USER, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setTotalUsersCount = (totalCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount });
export const setAuthUserData = (userId, email, login) => ({
  type: SET_AUTH_USER_DATA,
  data: { userId, email, login },
});
export const setAuthUser = (user) => ({ type: SET_AUTH_USER, user });

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export const setIsLoading = (isLoading) => ({ type: TOGGLE_IS_LOADING, isLoading });
export const setIsFollowingUsers = (isLoading, userId) => ({
  type: TOGGLE_IS_FOLLOWING_USERS,
  isLoading,
  userId,
});
