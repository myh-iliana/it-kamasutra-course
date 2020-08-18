import React from 'react';
import { connect } from "react-redux";

import UsersList from "./UsersList";
import {followUser, setCurrentPage, setTotalUsersCount, setUsers, unfollowUser} from "../../../store/actions";

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    pageSize: state.users.pageSize,
    totalUsersCount: state.users.totalUsersCount,
    currentPage: state.users.currentPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    followUser: (userId) => dispatch(followUser(userId)),
    unfollowUser: (userId) => dispatch(unfollowUser(userId)),
    setUsers: (users) => dispatch(setUsers(users)),
    setCurrentPage: (page) => dispatch(setCurrentPage(page)),
    setTotalUsersCount: (totalCount) => dispatch(setTotalUsersCount(totalCount)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);