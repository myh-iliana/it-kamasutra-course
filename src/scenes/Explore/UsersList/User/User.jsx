import React from 'react';
import { generatePath, Link } from 'react-router-dom';

import s from './User.module.scss';
import Avatar from '../../../../components/Avatar/Avatar';
import { routes } from '../../../routes';

const User = ({ user, followUser, unfollowUser, isFollowingUsers }) => {
  const userProfilePath = generatePath(routes.profile, { userId: user.id });

  const onFollowUser = () => followUser(user.id);
  const onUnfollowUser = () => unfollowUser(user.id);
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
      <button
        disabled={isFollowingUsers.some((id) => id === user.id)}
        onClick={switchFollow}
        style={{ '--bg-color': user.followed ? '#909298' : '#05cb95' }}
      >
        {user.followed ? 'Unfollow' : 'Follow'}
      </button>
    </div>
  );
};

export default User;
