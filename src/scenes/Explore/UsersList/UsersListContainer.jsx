import React, {useEffect} from 'react';
import { connect } from "react-redux";

import UsersList from "./UsersList";
import {followUser, setIsLoading, setTotalUsersCount, setUsers, unfollowUser} from "../../../store/actions";
import * as axios from "axios";
import Loader from "../../../components/Loader/Loader";

const UsersListContainer = (props) => {
  const { setUsers, pageSize, currentPage, setTotalUsersCount, isLoading, setIsLoading, ...rest } = props;

  useEffect(() => {
    setIsLoading(true);
    axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`, {
          withCredentials: true,
        })
        .then((res) => {
          setIsLoading(false);
          setUsers(res.data.items);
          setTotalUsersCount(res.data.totalCount);
        });
  }, []);

  const onPageChanged = (page) => {
    setIsLoading(true);
    axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page.selected + 1}&count=${pageSize}`, {
          withCredentials: true,
        })
        .then((res) => {
          setIsLoading(false);
          setUsers(res.data.items);
        });
  };

  return <React.Fragment>
    {isLoading && <Loader />}
    <UsersList onPageChanged={onPageChanged}
               pageSize={pageSize}
               {...rest}
    />
  </React.Fragment>;
};

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    pageSize: state.users.pageSize,
    totalUsersCount: state.users.totalUsersCount,
    isLoading: state.users.isLoading,
  };
};

const mapDispatchToProps = { followUser, unfollowUser, setUsers, setTotalUsersCount, setIsLoading };

export default connect(mapStateToProps, mapDispatchToProps)(UsersListContainer);

// const mapDispatchToProps = (dispatch) => {
//   return {
//     followUser: (userId) => dispatch(followUser(userId)),
//     unfollowUser: (userId) => dispatch(unfollowUser(userId)),
//     setUsers: (users) => dispatch(setUsers(users)),
//     setTotalUsersCount: (totalCount) => dispatch(setTotalUsersCount(totalCount)),
//     setIsLoading: (value) => dispatch(setIsLoading(value)),
//   };
// };