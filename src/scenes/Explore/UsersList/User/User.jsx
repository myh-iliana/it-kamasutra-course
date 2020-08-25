import React from "react";
import { generatePath, Link } from "react-router-dom";

import s from "./User.module.scss";
import Avatar from "../../../../components/Avatar/Avatar";
import { routes } from "../../../routes";
import * as axios from "axios";

const User = ({ user, followUser, unfollowUser }) => {
  const userProfilePath = generatePath(routes.profile, { userId: user.id });

  const onFollowUser = () => {
    axios
        .post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
          withCredentials: true,
          headers: {
            'api-key': 'ac86d9e3-9187-4600-9f7f-465babf3b5b5',
          },
        })
        .then(res => {
          if (res.data.resultCode === 0) {
            followUser(user.id);
          }
        });
  };

  const onUnfollowUser = () => {
    axios
        .delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
          withCredentials: true,
          headers: {
            'api-key': 'ac86d9e3-9187-4600-9f7f-465babf3b5b5',
          },
        })
        .then(res => {
          if (res.data.resultCode === 0) {
            unfollowUser(user.id);
          }
        });
  };

  const switchFollow = () => user.followed ? onUnfollowUser() : onFollowUser();

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
        onClick={switchFollow}
        style={{ "--bg-color": user.followed ? "#909298" : "#05cb95" }}
      >
        {user.followed ? "Unfollow" : "Follow"}
      </button>
    </div>
  );
};

export default User;
