import React from 'react';
import { generatePath, Route } from 'react-router-dom';

import s from './Profile.module.scss';
import UsersList from './components/UsersList/UsersList';
import Posts from './components/Posts/Posts';
import ProfileNav from './components/ProfileNav/ProfileNav';
import User from './components/User/User';
import Container from '../../components/Container/Container';
import { routes } from '../routes';

const Profile = ({ user, status, updateUserStatus, authUserId }) => {
  const pathToPosts = generatePath(routes.profilePosts, { userId: user.userId });
  const pathToFollowed = generatePath(routes.profileFollowers, { userId: user.userId });
  const pathToFollowing = generatePath(routes.profileFollowing, { userId: user.userId });

  return (
    <React.Fragment>
      <div className={s.row}>
        <div className={s.col_left}>
          <div />
          <div />
        </div>
        <div className={s.col_center}>
          <div />
        </div>
        <div className={s.col_right}>
          <div />
          <div />
        </div>
      </div>

      <Container className={s.profile}>
        <User user={user} status={status} authUserId={authUserId} updateUserStatus={updateUserStatus} />
        <div className={s.nav}>
          <ProfileNav paths={{ pathToPosts, pathToFollowed, pathToFollowing }} />
        </div>
        <Route path={pathToPosts} component={Posts} />
        <Route path={pathToFollowed} render={() => <UsersList />} />
        <Route path={pathToFollowing} render={() => <UsersList />} />
      </Container>
    </React.Fragment>
  );
};

export default Profile;
