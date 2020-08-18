//dialogs
export const ADD_MESSAGE = 'ADD_MESSAGE';

export const addMessage = (chatId, ownerId, text) => {
  const createdAt = new Date(Date.now());

  return {
    type: ADD_MESSAGE,
    chatId,
    ownerId,
    text,
    createdAt: createdAt.toLocaleTimeString(),
  }
};
//-------

//profile
export const ADD_POST = 'ADD_POST';

export const addPost = (value, image) => {
  return {
    type: ADD_POST,
    text: value,
    image,
  }
};
//-------

//Users
export const FOLLOW_USER = 'FOLLOW_USER';
export const UNFOLLOW_USER = 'UNFOLLOW_USER';
export const SET_USERS = 'SET_USERS';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

export const followUser = (userId) => ({ type: FOLLOW_USER, userId });

export const unfollowUser = (userId) => ({ type: UNFOLLOW_USER, userId });

export const setUsers = (users) => ({ type: SET_USERS, users });

export const setCurrentPage = page => ({ type: SET_CURRENT_PAGE, page });

export const setTotalUsersCount = totalCount => ({ type: SET_TOTAL_USERS_COUNT, totalCount });
//--------