import React from 'react';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCog, faMusic, faAlignLeft, faUser } from "@fortawesome/free-solid-svg-icons";

import s from './Navbar.module.scss';

const Navbar = () => {
  return (
      <nav className={s.nav}>
        <NavLink to='/' exact activeClassName={s.active}>
          <FontAwesomeIcon icon={faHome} />
          <span>Home</span>
        </NavLink>
        <NavLink to='/profile' activeClassName={s.active}>
          <FontAwesomeIcon icon={faUser} />
          <span>Profile</span>
        </NavLink>
        <NavLink to='/news' activeClassName={s.active}>
          <FontAwesomeIcon icon={faAlignLeft} />
          <span>News</span>
        </NavLink>
        <NavLink to='/music' activeClassName={s.active}>
          <FontAwesomeIcon icon={faMusic} />
          <span>Music</span>
        </NavLink>
        <NavLink to='/settings' activeClassName={s.active}>
          <FontAwesomeIcon icon={faCog} />
          <span>Settings</span>
        </NavLink>
      </nav>
  );
};

export default Navbar;