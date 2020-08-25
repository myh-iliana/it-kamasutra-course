import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './ProfileNav.module.scss';

const ProfileNav = ({ paths }) => {
  return (
    <div className={s.nav}>
      <div>
        <NavLink to={paths.pathToPosts} activeClassName={s.activeLink}>
          Posts <span>100</span>
        </NavLink>
      </div>
      <div>
        <NavLink to={paths.pathToFollowed} activeClassName={s.activeLink}>
          Followers <span>1.3M</span>
        </NavLink>
      </div>
      <div>
        <NavLink to={paths.pathToFollowing} activeClassName={s.activeLink}>
          Following <span>1200</span>
        </NavLink>
      </div>
    </div>
  );
};

export default ProfileNav;
