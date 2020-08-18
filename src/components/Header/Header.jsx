import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faSearch,
  faBell,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import AvaMain from '../../img/ava-main.jpg';

import s from "./Header.module.scss";
import Avatar from "../Avatar/Avatar";

const Header = () => {
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
          <form>
            <input type="text" placeholder='Search here' />
            <button>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
        </div>

        <div className={s.notifications}>
          <FontAwesomeIcon icon={faBell} />
          <span>4</span>
        </div>
        <Link to='/dialogs' className={s.messages}>
          <FontAwesomeIcon icon={faEnvelope} />
          <span>6</span>
        </Link>

        <div className={s.user}>
          <Avatar img={AvaMain} size={25} />
          <span>Alex Grantte</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
