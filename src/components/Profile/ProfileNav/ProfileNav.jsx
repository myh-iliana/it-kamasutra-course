import React from 'react';

import s from './ProfileNav.module.scss';
import {NavLink} from "react-router-dom";

const ProfileNav = () => {
  return (
      <div className={s.nav}>
        <div>
          <NavLink to='/profile/posts' activeClassName={s.activeLink}>
            Posts <span>100</span>
          </NavLink>
        </div>
        <div>
          <NavLink to='/profile/followers' activeClassName={s.activeLink}>
            Followers <span>1.3M</span>
          </NavLink>
        </div>
        <div>
          <NavLink to='/profile/following' activeClassName={s.activeLink}>
            Following <span>1200</span>
          </NavLink>
        </div>
      </div>
  );
};

export default ProfileNav;