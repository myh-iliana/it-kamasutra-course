import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBell, faEnvelope, faSignInAlt } from "@fortawesome/free-solid-svg-icons";

import s from "./Header.module.scss";
import Avatar from "../Avatar/Avatar";
import { routes } from "../../scenes/routes";
import SearchReduxForm from './SearchForm';

const Header = ({ isAuth, login, avatar }) => {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <div className={s.img}>
          <FontAwesomeIcon icon={faInstagram} className={s.icon} />
        </div>
        <span>Fluffs</span>
      </div>

      <div className={s.info}>
        <div className={s.search}>
          <SearchReduxForm />
        </div>

        {isAuth ? (
          <React.Fragment>
            <div className={s.notifications}>
              <FontAwesomeIcon icon={faBell} />
              <span>4</span>
            </div>
            <Link to={routes.dialogs} className={s.messages}>
              <FontAwesomeIcon icon={faEnvelope} />
              <span>6</span>
            </Link>

            <div className={s.user}>
              <Avatar img={avatar} size={25} />
              <span>{login}</span>
            </div>
          </React.Fragment>
        ) : (
          <div className={s.login}>
            <Link to={routes.signIn}>
              <FontAwesomeIcon icon={faSignInAlt} />
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
