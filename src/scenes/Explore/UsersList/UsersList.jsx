import React from 'react';
import ReactPaginate from 'react-paginate';

import s from './UsersList.module.scss';
import User from './User/User';
import Container from '../../../components/Container/Container';

const UsersList = (props) => {
  const {
    users,
    followUser,
    unfollowUser,
    totalUsersCount,
    pageSize,
    onPageChanged,
    isFollowingUsers,
  } = props;

  const PAGES_COUNT = Math.ceil(totalUsersCount / pageSize);

  return (
    <Container className={s.container}>
      <div className={s.usersList}>
        {users.map((user) => {
          return (
            <User
              key={user.id}
              user={user}
              followUser={followUser}
              unfollowUser={unfollowUser}
              isFollowingUsers={isFollowingUsers}
            />
          );
        })}
      </div>
      <ReactPaginate
        previousLabel="<"
        nextLabel=">"
        breakLabel="..."
        pageCount={PAGES_COUNT}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={onPageChanged}
        activeClassName={s.activePage}
        containerClassName={s.pagesList}
      />
    </Container>
  );
};

export default UsersList;
