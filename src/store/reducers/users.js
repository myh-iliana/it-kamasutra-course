import { FOLLOW_USER, SET_CURRENT_PAGE, SET_TOTAL_USERS_COUNT, SET_USERS, UNFOLLOW_USER } from "../actions";

const initialState = {
  users: [],
  pageSize: 16,
  totalUsersCount: 0,
  currentPage: 1,
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

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page,
      };

    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalCount,
      };

    default:
      return state;
  }
};

export default profile;
