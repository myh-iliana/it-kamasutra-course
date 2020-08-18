import React from 'react';
import { NavLink } from "react-router-dom";

import s from './ProfileNav.module.scss';
import { routes } from "../../../routes";

const ProfileNav = () => {
  return (
      <div className={s.nav}>
        <div>
          <NavLink to={routes.profilePosts} activeClassName={s.activeLink}>
            Posts <span>100</span>
          </NavLink>
        </div>
        <div>
          <NavLink to={routes.profileFollowers} activeClassName={s.activeLink}>
            Followers <span>1.3M</span>
          </NavLink>
        </div>
        <div>
          <NavLink to={routes.profileFollowing} activeClassName={s.activeLink}>
            Following <span>1200</span>
          </NavLink>
        </div>
      </div>
  );
};

export default ProfileNav;