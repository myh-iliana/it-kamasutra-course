import React from "react";

import s from "./User.module.scss";
import NoneAvatar from '../../../../img/none-avatar.png';

const User = ({ user, followUser, unfollowUser }) => {
  const switchFollow = () => user.followed ? unfollowUser(user.id) : followUser(user.id);

  return (
    <div className={s.user}>
      <div className={s.info}>
        <div className={s.name}>
          <h4>{user.name}</h4>
          {/*<span>@{user.login}</span>*/}
        </div>
        <div className={s.image}>
          <img src={user.photos.small ? user.photos.small : NoneAvatar} alt="" />
        </div>
      </div>
      <button
        onClick={switchFollow}
        style={{ "--bg-color": user.followed ? "#909298" : "#05cb95" }}
      >
        {user.followed ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
};

export default User;
