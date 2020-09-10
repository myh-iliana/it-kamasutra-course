import {
  FOLLOW_USER,
  TOGGLE_IS_LOADING,
  SET_TOTAL_USERS_COUNT,
  SET_USERS,
  UNFOLLOW_USER,
  TOGGLE_IS_FOLLOWING_USERS,
} from '../actions/users';

const initialState = {
  users: [],
  pageSize: 16,
  totalUsersCount: 0,
  isLoading: false,
  isFollowingUsers: [],
};

const profile = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_USER:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return {
              ...user,
              followed: true,
            };
          }
          return user;
        }),
      };

    case UNFOLLOW_USER:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return {
              ...user,
              followed: false,
            };
          }
          return user;
        }),
      };

    case SET_USERS:
      return {
        ...state,
        users: [...action.users],
      };

    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalCount,
      };

    case TOGGLE_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case TOGGLE_IS_FOLLOWING_USERS:
      return {
        ...state,
        isFollowingUsers: action.isLoading
          ? [...state.isFollowingUsers, action.userId]
          : state.isFollowingUsers.filter((id) => id !== action.userId),
      };

    default:
      return state;
  }
};

export default profile;
