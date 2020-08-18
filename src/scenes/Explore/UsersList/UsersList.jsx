import React, { useEffect } from "react";
import * as axios from "axios";
import ReactPaginate from 'react-paginate';

import s from "./UsersList.module.scss";
import User from "./User/User";
import Container from "../../../components/Container/Container";

const UsersList = (props) => {
  const {
    users,
    setUsers,
    followUser,
    unfollowUser,
    totalUsersCount,
    pageSize,
    currentPage,
    setCurrentPage,
    setTotalUsersCount,
  } = props;

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

  // ----- Pages count calculation
  let pages = [];
  const PAGES_COUNT = Math.ceil(totalUsersCount / pageSize);
  for (let i = 1; i <= PAGES_COUNT; i++) {
    pages.push(i);
  }
  // -------

  const onPageChanged = (page) => {
    // setCurrentPage(page);
    axios
        .get(
            `https://social-network.samuraijs.com/api/1.0/users?page=${page.selected + 1}&count=${pageSize}`
        )
        .then((res) => setUsers(res.data.items));
  };

  return (
    <Container className={s.container}>
      {/*<div className={`${s.pagesList}`}>*/}
      {/*  {pages.map((page) => (*/}
      {/*    <span className={`${currentPage === page && s.activePage}`}*/}
      {/*          onClick={() => { onPageChanged(page) }}*/}
      {/*          key={page}*/}
      {/*    >*/}
      {/*      {page}*/}
      {/*    </span>*/}
      {/*  ))}*/}
      {/*</div>*/}
      <div className={s.usersList}>
        {users.map((user) => {
          return (
            <User
              key={user.id}
              user={user}
              followUser={followUser}
              unfollowUser={unfollowUser}
            />
          );
        })}
      </div>
      <ReactPaginate previousLabel='<'
                     nextLabel='>'
                     breakLabel='...'
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
