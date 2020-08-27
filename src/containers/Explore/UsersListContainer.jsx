import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Loader from 'src/components/Loader/Loader';
import { followUser, unfollowUser, getUsers } from '../../store/actions';
import UsersList from '../../scenes/Explore/UsersList/UsersList';

const UsersListContainer = (props) => {
  const { pageSize, currentPage, isLoading, getUsers, ...rest } = props;

  useEffect(() => {
    getUsers(currentPage, pageSize);
  }, []);

  const onPageChanged = (page) => {
    getUsers(page.selected + 1, pageSize);
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
    isFollowingUsers: state.users.isFollowingUsers,
  };
};

const mapDispatchToProps = { followUser, unfollowUser, getUsers };

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
