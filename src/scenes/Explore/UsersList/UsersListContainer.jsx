import React, {useEffect} from 'react';
import { connect } from "react-redux";

import UsersList from "./UsersList";
import { followUser, setTotalUsersCount, setUsers, unfollowUser } from "../../../store/actions";
import * as axios from "axios";

const UsersListContainer = (props) => {
  const { setUsers, pageSize, currentPage, setTotalUsersCount, ...rest } = props;

  useEffect(() => {
    axios
        .get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`
        )
        .then((res) => {
          setUsers(res.data.items);
          setTotalUsersCount(res.data.totalCount);
        });
  }, []);

  const onPageChanged = (page) => {
    axios
        .get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${page.selected + 1}&count=${pageSize}`
        )
        .then((res) => setUsers(res.data.items));
  };

  return <UsersList onPageChanged={onPageChanged}
                    pageSize={pageSize}
                    {...rest}
  />;
};

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    pageSize: state.users.pageSize,
    totalUsersCount: state.users.totalUsersCount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    followUser: (userId) => dispatch(followUser(userId)),
    unfollowUser: (userId) => dispatch(unfollowUser(userId)),
    setUsers: (users) => dispatch(setUsers(users)),
    setTotalUsersCount: (totalCount) => dispatch(setTotalUsersCount(totalCount)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersListContainer);