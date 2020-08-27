import React from 'react';
import { generatePath, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCog, faMusic, faUser, faCrosshairs } from "@fortawesome/free-solid-svg-icons";

import s from './Navbar.module.scss';
import { routes } from "../../scenes/routes";

const Navbar = ({ isAuth, userId }) => {
  const pathToProfile = generatePath(routes.profilePosts, { userId: isAuth && userId });

  return (
      <nav className={s.nav}>
        <NavLink to={routes.home} exact activeClassName={s.active}>
          <FontAwesomeIcon icon={faHome} />
          <span>Home</span>
        </NavLink>
        <NavLink to={pathToProfile} activeClassName={s.active}>
          <FontAwesomeIcon icon={faUser} />
          <span>Profile</span>
        </NavLink>
        <NavLink to={routes.explore} activeClassName={s.active}>
          <FontAwesomeIcon icon={faCrosshairs} />
          <span>Explore</span>
        </NavLink>
        <NavLink to={routes.music} activeClassName={s.active}>
          <FontAwesomeIcon icon={faMusic} />
          <span>Music</span>
        </NavLink>
        <NavLink to={routes.settings} activeClassName={s.active}>
          <FontAwesomeIcon icon={faCog} />
          <span>Settings</span>
        </NavLink>
      </nav>
  );
};

export default Navbar;