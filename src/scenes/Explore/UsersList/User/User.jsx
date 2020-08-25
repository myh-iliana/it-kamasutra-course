import React from 'react';
import { generatePath, Link } from 'react-router-dom';

import * as Api from 'src/api';
import s from './User.module.scss';
import Avatar from '../../../../components/Avatar/Avatar';
import { routes } from '../../../routes';
import * as axios from 'axios';

const User = ({ user, followUser, unfollowUser }) => {
  const userProfilePath = generatePath(routes.profile, { userId: user.id });

  const onFollowUser = () => {
    Api.Users.follow(user.id).then((data) => {
      if (data.resultCode === 0) {
        followUser(user.id);
      }
    });
  };

  const onUnfollowUser = () => {
    Api.Users.unfollow(user.id)
      .then((data) => {
        if (data.resultCode === 0) {
          unfollowUser(user.id);
        }
      });
  };

  const switchFollow = () => (user.followed ? onUnfollowUser() : onFollowUser());

  return (
    <div className={s.user}>
      <Link to={userProfilePath} className={s.link}>
        <div className={s.info}>
          <div className={s.name}>
            <h4>{user.name}</h4>
            {/*<span>@{user.login}</span>*/}
          </div>
          <div>
            <Avatar img={user.photos.small} size={50} />
          </div>
        </div>
      </Link>
      <button onClick={switchFollow} style={{ '--bg-color': user.followed ? '#909298' : '#05cb95' }}>
        {user.followed ? 'Unfollow' : 'Follow'}
      </button>
    </div>
  );
};

export default User;
