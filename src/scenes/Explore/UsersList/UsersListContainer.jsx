import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as Api from 'src/api';
import Loader from 'src/components/Loader/Loader';
import { followUser, setIsLoading, setTotalUsersCount, setUsers, unfollowUser } from 'src/store/actions';
import UsersList from './UsersList';

const UsersListContainer = (props) => {
  const { setUsers, pageSize, currentPage, setTotalUsersCount, isLoading, setIsLoading, ...rest } = props;

  useEffect(() => {
    setIsLoading(true);
    Api.Users.getAll(currentPage, pageSize).then((data) => {
      setIsLoading(false);
      setUsers(data.items);
      setTotalUsersCount(data.totalCount);
    });
  }, []);

  const onPageChanged = (page) => {
    setIsLoading(true);
    Api.Users.getAll(page.selected + 1, pageSize).then((data) => {
      setIsLoading(false);
      setUsers(data.items);
    });
  };

  return (
    <React.Fragment>
      {isLoading && <Loader />}
      <UsersList onPageChanged={onPageChanged} pageSize={pageSize} {...rest} />
    </React.Fragment>
  );
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
